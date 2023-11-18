import { Request, Response, NextFunction } from 'express'
import { JwtPayload, verify } from 'jsonwebtoken'
import { HttpResponse } from '../routes/HttpResponse'
import { appConfig } from '../../config/envs'

export function authenticateMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const token = req.body.authToken

  if (!token) {
    HttpResponse.Unauthorized(res, 'There is not any token')
    return
  }

  try {
    const decoded = verify(token, appConfig.jwtKey) as JwtPayload & {
      id: string
    }

    req.id = decoded.id

    next()
  } catch (error) {
    HttpResponse.Forbidden(res, 'Invalid Token')
  }
}
