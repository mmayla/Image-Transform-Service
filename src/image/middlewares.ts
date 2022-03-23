import type { Request, Response, NextFunction } from 'express'
import Ajv from 'ajv'

import { imageResizeOptionsSchema, sourceURLSchema } from './schema.js'

export const sourceURLParamsValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const ajv = new Ajv({ coerceTypes: true })
  const validate = ajv.compile(sourceURLSchema)
  if (validate(req.params)) {
    next()
  } else {
    res.status(400).json({
      error: validate.errors,
    })
  }
}

export const imageOptionsQueryValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const ajv = new Ajv({ coerceTypes: true })
  const validate = ajv.compile(imageResizeOptionsSchema)
  if (validate(req.query)) {
    next()
  } else {
    res.status(400).json({
      error: validate.errors,
    })
  }
}
