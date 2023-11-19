import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import z from 'zod'
import { ExerciseByIdController } from '../../controllers/exercises/ExerciseByIdController'
import { validate } from '../../middleware/validate'
import { exerciseInfoReqSchema } from '../../../application/exercise/schemas/exerciseInfoReqSchema'
import { authenticateMiddleware } from '../../middleware/authMiddleware'

export const register = (router: Router): void => {
  const userCtrl = container.resolve(ExerciseByIdController)
  router.get(
    '/exercises/:id',
    authenticateMiddleware,
    validate(z.object({ params: exerciseInfoReqSchema })),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async (req: Request, res: Response) => await userCtrl.run(req, res)
  )
}
