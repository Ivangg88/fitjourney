import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import z from 'zod'
import { validate } from '../../middleware/validate'
import { userRegisterSchema } from '../../../application/user/schemas/userRegisterSchema'
import { RegisterController } from '../../controllers/users/RegisterController'

export const register = (router: Router): void => {
  const userCtrl = container.resolve(RegisterController)
  router.post(
    '/users/register',
    validate(z.object({ body: userRegisterSchema })),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async (req: Request, res: Response) => await userCtrl.run(req, res)
  )
}
