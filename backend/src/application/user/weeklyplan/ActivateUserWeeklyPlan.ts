import { inject, injectable } from 'tsyringe'
import { UserRepository } from '../../../domain/users/UserRepository'
import { InvalidCredentialsError } from '../InvalidCredentialsError'
import { WeeklyPlanNotFoundError } from './WeeklyPlanNotFoundError'
import { WeeklyPlanAlreadyActiveError } from './WeeklyPlanAlreadyActiveError'

@injectable()
export class ActivateUserWeeklyPlan {
  constructor(
    @inject('UserRepository') private readonly repository: UserRepository
  ) {}

  async run({
    id,
    weklyPlanId,
  }: {
    weklyPlanId: string
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

    if (weeklyPlanplan.isActive || weeklyPlanplan.isCompleted) {
      throw new WeeklyPlanAlreadyActiveError(
        'This weekly plan is already active or been completed'
      )
    }

    user.markWeeklyPlanAsActive(weklyPlanId)

    await this.repository.save(user)
  }
}
