import { Request, Response } from 'express'
import { injectable, inject } from 'tsyringe'
import { UserRegister } from '../../../application/user/UserRegister'
import { UserAlreadyExistsError } from '../../../application/user/errors/UserAlreadyExistsError'
import { UserRegisterSchema } from '../../../application/user/schemas/userRegisterSchema'
import { HttpResponse } from '../../routes/HttpResponse'
import { Controller } from '../Controller'

type RegisterRequest = Request & { body: UserRegisterSchema }

@injectable()
export class RegisterController implements Controller {
  constructor(
    @inject('UserRegister') private readonly userRegister: UserRegister
  ) {}

  async run(req: RegisterRequest, res: Response): Promise<void> {
    try {
      await this.userRegister.run(req.body)
    } catch (err) {
      if (err instanceof UserAlreadyExistsError) {
        HttpResponse.BadRequest(res, err.message)
      }
    }

    HttpResponse.NoContent(res)
  }
}
