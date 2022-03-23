import express from 'express'
import type { Request, Response, NextFunction } from 'express'

import * as imageController from './image/index.js'

const app = express()

/**
 * Express configuration
 */
app.use(express.json())

export const apiPrefix = '/api/v1'

/**
 * API routes
 */
app
  .route(`${apiPrefix}/images`)
  .get(imageController.imageOptionsQueryValidator)
  .get(imageController.resizeImage)

/**
 * Error handlers
 */
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err)
  }
  console.error(err.stack)
  res.status(500).json({
    message: 'Internal server error.',
  })
})

export default app
