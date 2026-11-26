export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginationMeta {
  total: number
  page: number
  limit: number
  totalPages: number
}

export function getPaginationMeta(params: PaginationParams & { total: number }): PaginationMeta {
  return {
    total: params.total,
    page: params.page,
    limit: params.limit,
    totalPages: Math.ceil(params.total / params.limit),
  }
}

export function getSkipTake(params: PaginationParams): { skip: number; take: number } {
  return {
    skip: (params.page - 1) * params.limit,
    take: params.limit,
  }
}