import { Request, Response } from 'express'
import { injectable, inject } from 'tsyringe'
import { Controller } from '../Controller'
import { HttpResponse } from '../../routes/HttpResponse'
import { WeeklyPlanNotFoundError } from '../../../application/user/weeklyplan/WeeklyPlanNotFoundError'
import { WeeklyPlanAlreadyActiveError } from '../../../application/user/weeklyplan/WeeklyPlanAlreadyActiveError'
import { MarkDailyPlayAsCompleted } from '../../../application/user/weeklyplan/MarkDailyPlayAsCompleted'
import { DailyPlanNotFoundError } from '../../../application/user/weeklyplan/DailyPlanNotFoundError'

type RegisterRequest = Request & {
  params: {
    id?: string
    dailyPlanId?: string
  }
}

@injectable()
export class MarkDailyPlayAsCompletedController implements Controller {
  constructor(
    @inject('MarkDailyPlayAsCompleted')
    private readonly activateUserWeeklyPlan: MarkDailyPlayAsCompleted
  ) {}

  async run(req: RegisterRequest, res: Response): Promise<void> {
    try {
      const data = await this.activateUserWeeklyPlan.run({
        id: req.id as string,
        weklyPlanId: req.params.id as string,
        dailyPlanId: req.params.dailyPlanId as string,
      })
      HttpResponse.Ok(res, data)
    } catch (err) {
      if (err instanceof WeeklyPlanNotFoundError) {
        HttpResponse.BadRequest(res, err.message)
      } else if (err instanceof WeeklyPlanAlreadyActiveError) {
        HttpResponse.BadRequest(res, err.message)
      } else if (err instanceof DailyPlanNotFoundError) {
        HttpResponse.BadRequest(res, err.message)
      }
    }

    HttpResponse.NoContent(res)
  }
}
