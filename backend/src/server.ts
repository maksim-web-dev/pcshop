import { env } from './config/env'
import { initOtel } from './plugins/otel'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import qs from 'qs'
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import prismaPlugin from './plugins/prisma'
import metricsPlugin from './plugins/metrics'
import { productTypesRoutes } from './routes/productTypes'
import { categoriesRoutes } from './routes/categories'
import { productsRoutes } from './routes/products'
import { AppError } from './errors/AppError'

if (env.NODE_ENV !== 'test' && env.OTEL_EXPORTER_OTLP_ENDPOINT) {
  initOtel(env.OTEL_EXPORTER_OTLP_ENDPOINT)
}

export async function buildServer() {
  const app = Fastify({
    logger: {
      level: env.LOG_LEVEL,
      ...(env.NODE_ENV === 'development' && {
        transport: { target: 'pino-pretty', options: { colorize: true } },
      }),
    },
    querystringParser: (str) => qs.parse(str, { allowDots: true }),
  })

  app.setValidatorCompiler(validatorCompiler)
  app.setSerializerCompiler(serializerCompiler)

  app.setErrorHandler((error, request, reply) => {
    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({ error: error.message })
    }
    if (error.validation) {
      return reply.status(400).send({ error: 'Validation error', details: error.validation })
    }
    app.log.error({ err: error, reqId: request.id }, 'Unexpected error')
    return reply.status(500).send({ error: 'Internal server error' })
  })

  await app.register(cors, { origin: true })
  await app.register(prismaPlugin)
  await app.register(metricsPlugin)

  await app.register(productTypesRoutes, { prefix: '/api' })
  await app.register(categoriesRoutes, { prefix: '/api' })
  await app.register(productsRoutes, { prefix: '/api' })

  app.get('/health', async () => ({ status: 'ok' }))

  return app
}

async function start() {
  const app = await buildServer()
  try {
    await app.listen({ port: env.PORT, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()