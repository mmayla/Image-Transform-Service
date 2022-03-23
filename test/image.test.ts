/* eslint-disable jest/expect-expect, jest/no-done-callback */
import request from 'supertest'

import app, { apiPrefix } from '../src/app.js'

const imagesRoute = `${apiPrefix}/images`

const testImageURL =
  'https://images.unsplash.com/photo-1647915812367-de4f9de43de6'

describe('GET /images', () => {
  it('should return 200', async () => {
    const resizeURL = `${imagesRoute}?source=${testImageURL}&height=515&width=512&fit=cover&quality=100`
    const res = await request(app).get(resizeURL)
    expect(res.status).toEqual(200)
    expect(res.headers['content-type']).toMatch(/image/)
  })
})
