import type { PrismaClient, Category, CategoryParameter } from '@prisma/client'

export class CategoriesRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(productTypeId?: string): Promise<Category[]> {
    return this.prisma.category.findMany({
      where: productTypeId ? { productTypeId } : undefined,
      orderBy: { name: 'asc' },
    })
  }

  async findById(id: string): Promise<(Category & { parameters: CategoryParameter[] }) | null> {
    return this.prisma.category.findUnique({
      where: { id },
      include: {
        parameters: { orderBy: { sortOrder: 'asc' } },
      },
    })
  }

  async findParameterValues(categoryId: string, key: string): Promise<string[]> {
    const rows = await this.prisma.productParameter.findMany({
      where: {
        categoryParameter: { key, categoryId },
        product: { isActive: true },
      },
      select: { value: true },
      distinct: ['value'],
      orderBy: { value: 'asc' },
    })
    return rows.map((r) => r.value)
  }
}