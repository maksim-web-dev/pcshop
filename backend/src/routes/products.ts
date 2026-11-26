import { z } from 'zod'
import type { FastifyPluginAsync } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { ProductsController } from '../controllers/products.controller'
import { ProductsService } from '../services/products.service'
import { ProductsRepository } from '../repositories/products.repository'

export const productsRoutes: FastifyPluginAsync = async (fastify) => {
  const app = fastify.withTypeProvider<ZodTypeProvider>()
  const repo = new ProductsRepository(fastify.prisma)
  const service = new ProductsService(repo, fastify.log)
  const controller = new ProductsController(service)

  app.get(
    '/products',
    {
      schema: {
        querystring: z.object({
          productTypeId: z.string().uuid().optional(),
          categoryId: z.string().uuid().optional(),
          search: z.string().optional(),
          sortBy: z.enum(['price', 'name', 'createdAt']).optional(),
          sortDir: z.enum(['asc', 'desc']).optional(),
          page: z.coerce.number().int().min(1).default(1),
          limit: z.coerce.number().int().min(1).max(100).default(20),
          params: z.record(z.string()).optional(),
        }),
      },
    },
    async (request, reply) => {
      const { params, ...rest } = request.query
      reply.send(await controller.list({ ...rest, params }))
    },
  )

  app.get(
    '/products/:id',
    {
      schema: {
        params: z.object({ id: z.string().uuid() }),
      },
    },
    async (request, reply) => {
      reply.send(await controller.getById(request.params.id))
    },
  )
}