import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import z from 'zod'
import { validate } from '../../middleware/validate'
import { userLoginReqSchema } from '../../../application/user/schemas/userLoginReqSchema'
import { LoginController } from '../../controllers/LoginController'

export const register = (router: Router): void => {
  const userCtrl = container.resolve(LoginController)
  router.post(
    '/users/login',
    validate(z.object({ body: userLoginReqSchema })),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async (req: Request, res: Response) => await userCtrl.run(req, res)
  )
}
