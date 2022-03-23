import type { NextFunction, Request, Response } from 'express'

export const resizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { source, width, height } = req.query
    res.json({
      source,
      width,
      height,
    })
  } catch (error) {
    next(error)
  }
}
