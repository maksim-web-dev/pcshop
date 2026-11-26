import type { ProductType } from '@prisma/client'
import type { ProductTypesRepository } from '../repositories/productTypes.repository'

export class ProductTypesService {
  constructor(private readonly repo: ProductTypesRepository) {}

  async findAll(): Promise<ProductType[]> {
    return this.repo.findAll()
  }
}