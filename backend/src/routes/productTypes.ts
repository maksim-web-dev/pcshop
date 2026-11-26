import type { FastifyPluginAsync } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { ProductTypesController } from '../controllers/productTypes.controller'
import { ProductTypesService } from '../services/productTypes.service'
import { ProductTypesRepository } from '../repositories/productTypes.repository'

export const productTypesRoutes: FastifyPluginAsync = async (fastify) => {
  const app = fastify.withTypeProvider<ZodTypeProvider>()
  const controller = new ProductTypesController(
    new ProductTypesService(new ProductTypesRepository(fastify.prisma)),
  )

  app.get('/product-types', async (_request, reply) => {
    reply.send(await controller.list())
  })
}