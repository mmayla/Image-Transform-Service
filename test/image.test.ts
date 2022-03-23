/* eslint-disable jest/expect-expect, jest/no-done-callback */
import request from 'supertest'

import app, { apiPrefix } from '../src/app.js'

const imagesRoute = `${apiPrefix}/images`

describe('GET /images', () => {
  it('should return 200', async () => {
    const resizeURL = `${imagesRoute}/test-image.png?width=1024&height=1024`
    const res = await request(app).get(resizeURL)
    expect(res.status).toEqual(200)
    expect(res.headers['content-type']).toMatch(/json/)
    expect(res.body['width']).toEqual(1024)
  })
})
