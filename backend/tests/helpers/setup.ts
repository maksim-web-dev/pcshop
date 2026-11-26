import { buildServer } from '../../src/server'
import type { FastifyInstance } from 'fastify'

export let app: FastifyInstance

beforeAll(async () => {
  app = await buildServer()
  await app.ready()
})

afterAll(async () => {
  await app.close()
})