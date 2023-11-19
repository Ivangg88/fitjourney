import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import { authenticateMiddleware } from '../../middleware/authMiddleware'
import { MeController } from '../../controllers/users/MeController'

export const register = (router: Router): void => {
  const userCtrl = container.resolve(MeController)
  router.post(
    '/users/me',
    authenticateMiddleware,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async (req: Request, res: Response) => await userCtrl.run(req, res)
  )
}
