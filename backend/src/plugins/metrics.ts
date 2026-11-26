import fp from 'fastify-plugin'
import fastifyMetrics from 'fastify-metrics'
import type { FastifyPluginAsync } from 'fastify'

const metricsPlugin: FastifyPluginAsync = async (fastify) => {
  await fastify.register(fastifyMetrics, { endpoint: '/metrics' })

  new fastify.metrics.client.Gauge({
    name: 'pcshop_active_products_total',
    help: 'Total number of active products in the database',
    async collect() {
      const count = await fastify.prisma.product.count({ where: { isActive: true } })
      this.set(count)
    },
  })
}

export default fp(metricsPlugin, { name: 'metrics', dependencies: ['prisma'] })