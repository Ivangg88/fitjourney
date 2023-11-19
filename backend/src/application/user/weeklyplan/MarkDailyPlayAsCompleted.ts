import { inject, injectable } from 'tsyringe'
import { UserRepository } from '../../../domain/users/UserRepository'
import { InvalidCredentialsError } from '../InvalidCredentialsError'
import { WeeklyPlanNotFoundError } from './WeeklyPlanNotFoundError'
import { WeeklyPlanAlreadyActiveError } from './WeeklyPlanAlreadyActiveError'
import { DailyPlanNotFoundError } from './DailyPlanNotFoundError'

@injectable()
export class MarkDailyPlayAsCompleted {
  constructor(
    @inject('UserRepository') private readonly repository: UserRepository
  ) {}

  async run({
    id,
    weklyPlanId,
    dailyPlanId,
  }: {
    weklyPlanId: string
    dailyPlanId: string
    id: string
  }): Promise<void> {
    const user = await this.repository.search(id)
    if (!user) {
      throw new InvalidCredentialsError('Invalid Credential')
    }
    const weeklyPlanplan = user.getWeeklyPlanById(weklyPlanId)
    if (!weeklyPlanplan) {
      throw new WeeklyPlanNotFoundError('User does not have this weekly plan')
    }
    if (weeklyPlanplan.isCompleted) {
      throw new WeeklyPlanAlreadyActiveError('Weekly plan is already completed')
    }

    // find daily pland and mark as completed
    const dailyPlan = weeklyPlanplan.days.find((day) => day.id === dailyPlanId)

    if (!dailyPlan) {
      throw new DailyPlanNotFoundError('User does not have this daily plan')
    }

    dailyPlan.isCompleted = true
    user.addExperience(dailyPlan.experience)

    await this.repository.save(user)
  }
}
