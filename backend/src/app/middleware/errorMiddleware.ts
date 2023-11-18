/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-ex-assign */
import { ZodError } from 'zod'
import { Request, Response, NextFunction } from 'express'
import { ValidationError } from '../routes/errorsResponse'
import { HttpResponse } from '../routes/HttpResponse'

const errorMiddleware = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return new ValidationError(res, err.errors)
  }
  return HttpResponse.Error(res)
}

// eslint-disable-next-line import/prefer-default-export
export { errorMiddleware }
