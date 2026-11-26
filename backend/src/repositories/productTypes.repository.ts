import type { PrismaClient, ProductType } from '@prisma/client'

export class ProductTypesRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<ProductType[]> {
    return this.prisma.productType.findMany({
      orderBy: { name: 'asc' },
    })
  }
}