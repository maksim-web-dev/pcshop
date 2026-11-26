import { z } from 'zod'
import type { FastifyPluginAsync } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { CategoriesController } from '../controllers/categories.controller'
import { CategoriesService } from '../services/categories.service'
import { CategoriesRepository } from '../repositories/categories.repository'

export const categoriesRoutes: FastifyPluginAsync = async (fastify) => {
  const app = fastify.withTypeProvider<ZodTypeProvider>()
  const controller = new CategoriesController(
    new CategoriesService(new CategoriesRepository(fastify.prisma)),
  )

  app.get(
    '/categories',
    {
      schema: {
        querystring: z.object({
          productTypeId: z.string().uuid().optional(),
        }),
      },
    },
    async (request, reply) => {
      reply.send(await controller.list(request.query.productTypeId))
    },
  )

  app.get(
    '/categories/:id',
    {
      schema: {
        params: z.object({ id: z.string().uuid() }),
      },
    },
    async (request, reply) => {
      reply.send(await controller.getById(request.params.id))
    },
  )

  app.get(
    '/categories/:id/parameters/:key/values',
    {
      schema: {
        params: z.object({
          id: z.string().uuid(),
          key: z.string().min(1),
        }),
      },
    },
    async (request, reply) => {
      reply.send(await controller.getParameterValues(request.params.id, request.params.key))
    },
  )
}