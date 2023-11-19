import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import { authenticateMiddleware } from '../../middleware/authMiddleware'
import { ActivateUserWeeklyPlanController } from '../../controllers/users/ActivateUserWeeklyPlanController'

export const register = (router: Router): void => {
  const activateUserWeeklyPlanCtrl = container.resolve(
    ActivateUserWeeklyPlanController
  )
  router.post(
    '/users/weeklyplan/activate/:id',
    authenticateMiddleware,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async (req: Request, res: Response) =>
      await activateUserWeeklyPlanCtrl.run(req, res)
  )
}
