import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

const validate =
  (schema: z.Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    await schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    })
    next()
  }

/* const parse =
  (schema: z.Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const parsed = await schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    })
    ctx.request.body = parsed.body
    ctx.query = parsed.query
    ctx.params = parsed.params
    return next()
  } */

export { validate }
