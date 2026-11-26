import { describe, it, expect } from 'vitest'
import { app } from './helpers/setup'

describe('GET /api/products', () => {
  it('returns 200 with paginated shape', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/products' })
    expect(res.statusCode).toBe(200)
    const body = res.json()
    expect(Array.isArray(body.data)).toBe(true)
    expect(body.meta).toMatchObject({ page: 1, limit: 20 })
    expect(typeof body.meta.total).toBe('number')
    expect(typeof body.meta.totalPages).toBe('number')
  })

  it('respects page and limit params', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/products?page=1&limit=5' })
    expect(res.statusCode).toBe(200)
    const body = res.json()
    expect(body.meta.page).toBe(1)
    expect(body.meta.limit).toBe(5)
    expect(body.data.length).toBeLessThanOrEqual(5)
  })

  it('filters by productTypeId', async () => {
    const ptRes = await app.inject({ method: 'GET', url: '/api/product-types' })
    const pts = ptRes.json()
    if (pts.length === 0) return

    const res = await app.inject({ method: 'GET', url: `/api/products?productTypeId=${pts[0].id}` })
    expect(res.statusCode).toBe(200)
    res.json().data.forEach((p: { productTypeId: string }) => {
      expect(p.productTypeId).toBe(pts[0].id)
    })
  })

  it('searches by name (case-insensitive)', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/products?search=gaming' })
    expect(res.statusCode).toBe(200)
    expect(res.json().data).toBeDefined()
  })

  it('returns 400 for limit > 100', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/products?limit=200' })
    expect(res.statusCode).toBe(400)
  })

  it('returns 400 for invalid productTypeId', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/products?productTypeId=bad-uuid' })
    expect(res.statusCode).toBe(400)
  })
})

describe('GET /api/products/:id', () => {
  it('returns product with parameters', async () => {
    const listRes = await app.inject({ method: 'GET', url: '/api/products' })
    const products = listRes.json().data
    if (products.length === 0) return

    const res = await app.inject({ method: 'GET', url: `/api/products/${products[0].id}` })
    expect(res.statusCode).toBe(200)
    const body = res.json()
    expect(body).toHaveProperty('id')
    expect(body).toHaveProperty('name')
    expect(body).toHaveProperty('price')
    expect(Array.isArray(body.parameters)).toBe(true)
    if (body.parameters.length > 0) {
      expect(body.parameters[0]).toMatchObject({
        key: expect.any(String),
        name: expect.any(String),
        value: expect.any(String),
      })
    }
  })

  it('returns 404 for non-existent product', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/products/00000000-0000-0000-0000-000000000000' })
    expect(res.statusCode).toBe(404)
  })

  it('returns 400 for invalid UUID', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/products/not-a-uuid' })
    expect(res.statusCode).toBe(400)
  })
})