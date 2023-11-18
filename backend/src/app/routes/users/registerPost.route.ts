import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import z from 'zod'
import { RegisterController } from '../../controllers/RegisterController'
import { validate } from '../../middleware/validate'
import { userRegisterSchema } from '../../../application/user/schemas/userRegisterSchema'

export const register = (router: Router): void => {
  const userCtrl = container.resolve(RegisterController)
  router.post(
    '/register',
    validate(z.object({ body: userRegisterSchema })),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async (req: Request, res: Response) => await userCtrl.run(req, res)
  )
}
