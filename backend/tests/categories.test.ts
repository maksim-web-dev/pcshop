import { describe, it, expect } from 'vitest'
import { app } from './helpers/setup'

describe('GET /api/categories', () => {
  it('returns 200 with an array', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/categories' })
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.json())).toBe(true)
  })

  it('filters by productTypeId', async () => {
    const ptRes = await app.inject({ method: 'GET', url: '/api/product-types' })
    const productTypes = ptRes.json()
    if (productTypes.length === 0) return

    const ptId = productTypes[0].id
    const res = await app.inject({ method: 'GET', url: `/api/categories?productTypeId=${ptId}` })
    expect(res.statusCode).toBe(200)
    const cats = res.json()
    expect(Array.isArray(cats)).toBe(true)
    cats.forEach((c: { productTypeId: string }) => expect(c.productTypeId).toBe(ptId))
  })

  it('returns 400 for invalid productTypeId', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/categories?productTypeId=not-a-uuid' })
    expect(res.statusCode).toBe(400)
  })
})

describe('GET /api/categories/:id', () => {
  it('returns category with parameters', async () => {
    const listRes = await app.inject({ method: 'GET', url: '/api/categories' })
    const cats = listRes.json()
    if (cats.length === 0) return

    const res = await app.inject({ method: 'GET', url: `/api/categories/${cats[0].id}` })
    expect(res.statusCode).toBe(200)
    const body = res.json()
    expect(body).toHaveProperty('id')
    expect(body).toHaveProperty('parameters')
    expect(Array.isArray(body.parameters)).toBe(true)
  })

  it('returns 404 for unknown UUID', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/categories/00000000-0000-0000-0000-000000000000' })
    expect(res.statusCode).toBe(404)
  })

  it('returns 400 for invalid UUID', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/categories/not-a-uuid' })
    expect(res.statusCode).toBe(400)
  })
})

describe('GET /api/categories/:id/parameters/:key/values', () => {
  it('returns array of string values', async () => {
    const listRes = await app.inject({ method: 'GET', url: '/api/categories' })
    const cats = listRes.json()
    if (cats.length === 0) return

    const catRes = await app.inject({ method: 'GET', url: `/api/categories/${cats[0].id}` })
    const cat = catRes.json()
    if (!cat.parameters?.length) return

    const key = cat.parameters[0].key
    const res = await app.inject({ method: 'GET', url: `/api/categories/${cats[0].id}/parameters/${key}/values` })
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.json())).toBe(true)
  })

  it('returns 404 for unknown parameter key', async () => {
    const listRes = await app.inject({ method: 'GET', url: '/api/categories' })
    const cats = listRes.json()
    if (cats.length === 0) return

    const res = await app.inject({ method: 'GET', url: `/api/categories/${cats[0].id}/parameters/nonexistent_key/values` })
    expect(res.statusCode).toBe(404)
  })
})