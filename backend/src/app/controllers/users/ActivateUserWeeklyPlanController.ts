import { Request, Response } from 'express'
import { injectable, inject } from 'tsyringe'
import { Controller } from '../Controller'
import { HttpResponse } from '../../routes/HttpResponse'
import { ActivateUserWeeklyPlan } from '../../../application/user/weeklyplan/ActivateUserWeeklyPlan'
import { WeeklyPlanNotFoundError } from '../../../application/user/weeklyplan/WeeklyPlanNotFoundError'
import { WeeklyPlanAlreadyActiveError } from '../../../application/user/weeklyplan/WeeklyPlanAlreadyActiveError'

type ActivateUserWeeklyPlanRequest = Request

@injectable()
export class ActivateUserWeeklyPlanController implements Controller {
  constructor(
    @inject('ActivateUserWeeklyPlan')
    private readonly activateUserWeeklyPlan: ActivateUserWeeklyPlan
  ) {}

  async run(req: ActivateUserWeeklyPlanRequest, res: Response): Promise<void> {
    try {
      const data = await this.activateUserWeeklyPlan.run({
        id: req.id as string,
        weklyPlanId: req.params.id as string,
      })
      HttpResponse.Ok(res, data)
    } catch (err) {
      if (err instanceof WeeklyPlanNotFoundError) {
        HttpResponse.BadRequest(res, err.message)
      } else if (err instanceof WeeklyPlanAlreadyActiveError) {
        HttpResponse.BadRequest(res, err.message)
      }
    }

    HttpResponse.NoContent(res)
  }
}
