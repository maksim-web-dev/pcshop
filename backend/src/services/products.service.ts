import type { FastifyBaseLogger } from 'fastify'
import type { ProductsRepository, ProductFilters } from '../repositories/products.repository'
import { AppError } from '../errors/AppError'
import { getPaginationMeta } from '../utils/pagination'

export class ProductsService {
  constructor(
    private readonly repo: ProductsRepository,
    private readonly logger: FastifyBaseLogger,
  ) {}

  async findMany(filters: ProductFilters) {
    this.logger.info({ filters }, 'Fetching products')
    const { data, total } = await this.repo.findMany(filters)
    return {
      data,
      meta: getPaginationMeta({ page: filters.page, limit: filters.limit, total }),
    }
  }

  async findById(id: string) {
    const product = await this.repo.findById(id)
    if (!product) throw new AppError('Product not found', 404)

    return {
      ...product,
      parameters: product.parameters.map((pp) => ({
        key: pp.categoryParameter.key,
        name: pp.categoryParameter.name,
        unit: pp.categoryParameter.unit,
        value: pp.value,
      })),
    }
  }
}