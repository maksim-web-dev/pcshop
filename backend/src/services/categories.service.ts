import type { CategoriesRepository } from '../repositories/categories.repository'
import { AppError } from '../errors/AppError'

export class CategoriesService {
  constructor(private readonly repo: CategoriesRepository) {}

  async findAll(productTypeId?: string) {
    return this.repo.findAll(productTypeId)
  }

  async findById(id: string) {
    const category = await this.repo.findById(id)
    if (!category) throw new AppError('Category not found', 404)
    return category
  }

  async findParameterValues(categoryId: string, key: string) {
    const category = await this.repo.findById(categoryId)
    if (!category) throw new AppError('Category not found', 404)

    const paramExists = category.parameters.some((p) => p.key === key)
    if (!paramExists) throw new AppError('Parameter not found', 404)

    return this.repo.findParameterValues(categoryId, key)
  }
}