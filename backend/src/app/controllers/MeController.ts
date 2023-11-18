import { Request, Response } from 'express'
import { injectable, inject } from 'tsyringe'

import { Controller } from './Controller'
import { UserRegisterSchema } from '../../application/user/schemas/userRegisterSchema'
import { HttpResponse } from '../routes/HttpResponse'
import { UserAlreadyExistsError } from '../../application/user/errors/UserAlreadyExistsError'
import { UserInfo } from '../../application/user/UserInfo'

type RegisterRequest = Request & { body: UserRegisterSchema }

@injectable()
export class MeController implements Controller {
  constructor(@inject('UserInfo') private readonly userInfo: UserInfo) {}

  async run(req: RegisterRequest, res: Response): Promise<void> {
    try {
      const data = await this.userInfo.run({ id: req.id as string })
      HttpResponse.Ok(res, data)
    } catch (err) {
      if (err instanceof UserAlreadyExistsError) {
        HttpResponse.BadRequest(res, err.message)
      }
    }
  }
}
