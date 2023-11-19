import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import { authenticateMiddleware } from '../../middleware/authMiddleware'
import { MarkDailyPlayAsCompletedController } from '../../controllers/users/MarkDailyPlanAsComletedController'

export const register = (router: Router): void => {
  const markDailyPlayAsCompletedController = container.resolve(
    MarkDailyPlayAsCompletedController
  )
  router.post(
    '/users/weeklyplan/:id/dailyplan/:dailyPlanId/complete',
    authenticateMiddleware,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async (req: Request, res: Response) =>
      await markDailyPlayAsCompletedController.run(req, res)
  )
}
