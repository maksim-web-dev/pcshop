import { describe, it, expect } from 'vitest'
import { app } from './helpers/setup'

describe('GET /api/product-types', () => {
  it('returns 200 with an array', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/product-types' })
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.json())).toBe(true)
  })

  it('each item has id, name, slug, createdAt', async () => {
    const res = await app.inject({ method: 'GET', url: '/api/product-types' })
    const items = res.json()
    if (items.length === 0) return
    expect(items[0]).toMatchObject({
      id: expect.any(String),
      name: expect.any(String),
      slug: expect.any(String),
      createdAt: expect.any(String),
    })
  })
})