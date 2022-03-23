import type { NextFunction, Request, Response } from 'express'

export const resizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { width, height } = req.query
    res.json({
      width,
      height,
    })
  } catch (error) {
    next(error)
  }
}
