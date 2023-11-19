import { Request, Response } from 'express'
import { injectable, inject } from 'tsyringe'
import jwt from 'jsonwebtoken'
import { Controller } from '../Controller'
import { HttpResponse } from '../../routes/HttpResponse'
import { UserLogin } from '../../../application/user/UserLogin'
import { UserLoginReq } from '../../../application/user/schemas/userLoginReqSchema'
import { InvalidCredentialsError } from '../../../application/user/InvalidCredentialsError'
import { appConfig } from '../../../config/envs'

type RegisterRequest = Request & { body: UserLoginReq }

@injectable()
export class LoginController implements Controller {
  constructor(@inject('UserLogin') private readonly userLogin: UserLogin) {}

  async run(req: RegisterRequest, res: Response): Promise<void> {
    try {
      const id = await this.userLogin.run(req.body)
      const authToken = jwt.sign({ id }, appConfig.jwtKey, {
        expiresIn: '15m',
      })
      HttpResponse.Ok(res, { authToken })
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        HttpResponse.Unauthorized(res, error.message)
      }
      HttpResponse.Error(res, 'Server Error')
    }
  }
}
