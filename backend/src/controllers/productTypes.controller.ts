import type { ProductTypesService } from '../services/productTypes.service'

export class ProductTypesController {
  constructor(private readonly service: ProductTypesService) {}

  async list() {
    return this.service.findAll()
  }
}