import type { ProductsService } from '../services/products.service'
import type { ProductFilters } from '../repositories/products.repository'

export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  async list(filters: ProductFilters) {
    return this.service.findMany(filters)
  }

  async getById(id: string) {
    return this.service.findById(id)
  }
}