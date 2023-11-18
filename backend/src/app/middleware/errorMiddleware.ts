/* eslint-disable no-ex-assign */
import { ZodError } from 'zod'
import { Request, Response, NextFunction } from 'express'
import { ValidationError } from '../routes/errorsResponse'

const errorMiddleware = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return new ValidationError(res, err.errors)
  }
  return res.status(
    500
  ) /* else if (error?.errorInfo?.code === 'auth/id-token-expired') {
      error = new UnauthorizedError('refresh_token')
    } else if (error instanceof JsonWebTokenError) {
      error = new InvalidToken()
      ctx.cookies.set('token', null, { expires: new Date(0), overwrite: true })
    } */
}

// eslint-disable-next-line import/prefer-default-export
export { errorMiddleware }
