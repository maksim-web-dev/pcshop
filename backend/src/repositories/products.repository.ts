import type { PrismaClient, Prisma } from '@prisma/client'

export interface ProductFilters {
  productTypeId?: string
  categoryId?: string
  search?: string
  params?: Record<string, string>
  sortBy?: 'price' | 'name' | 'createdAt'
  sortDir?: 'asc' | 'desc'
  page: number
  limit: number
}

export class ProductsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany(filters: ProductFilters) {
    const where: Prisma.ProductWhereInput = { isActive: true }

    if (filters.productTypeId) where.productTypeId = filters.productTypeId
    if (filters.categoryId) where.categoryId = filters.categoryId
    if (filters.search) where.name = { contains: filters.search, mode: 'insensitive' }

    if (filters.params && Object.keys(filters.params).length > 0) {
      where.AND = Object.entries(filters.params).map(([key, value]) => ({
        parameters: {
          some: { categoryParameter: { key }, value },
        },
      }))
    }

    const orderBy: Prisma.ProductOrderByWithRelationInput = {
      [filters.sortBy ?? 'createdAt']: filters.sortDir ?? 'asc',
    }

    const skip = (filters.page - 1) * filters.limit
    const take = filters.limit

    const [total, data] = await this.prisma.$transaction([
      this.prisma.product.count({ where }),
      this.prisma.product.findMany({ where, orderBy, skip, take }),
    ])

    return { total, data }
  }

  async findById(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        parameters: {
          include: {
            categoryParameter: { select: { key: true, name: true, unit: true } },
          },
        },
      },
    })
  }
}