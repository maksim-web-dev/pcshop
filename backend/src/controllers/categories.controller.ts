import type { CategoriesService } from '../services/categories.service'

export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  async list(productTypeId?: string) {
    return this.service.findAll(productTypeId)
  }

  async getById(id: string) {
    return this.service.findById(id)
  }

  async getParameterValues(categoryId: string, key: string) {
    return this.service.findParameterValues(categoryId, key)
  }
}