import type { NextFunction, Request, Response } from 'express'
import axios from 'axios'
import sharp, { FitEnum } from 'sharp'

export const resizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const url = req.query.source?.toString()
    const w = req.query.width as number | undefined
    const h = req.query.height as number | undefined
    const fit = req.query.fit as keyof FitEnum
    const quality = req.query.quality as number | undefined

    const input = (
      await axios({
        url: url,
        responseType: 'arraybuffer',
      })
    ).data as Buffer

    const result = await sharp(input)
      .resize({ width: w, height: h, fit })
      .jpeg({
        quality,
      })
      .toBuffer()

    res.contentType('image/jpeg')
    res.send(result)
  } catch (error) {
    next(error)
  }
}
