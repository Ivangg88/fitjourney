import { ApplicationError } from '../../share/ApplicationError'

export class WeeklyPlanAlreadyActiveError extends ApplicationError {
  constructor(
    message: string = 'Weekly plan is already active or been completed'
  ) {
    super(message)
  }
}
