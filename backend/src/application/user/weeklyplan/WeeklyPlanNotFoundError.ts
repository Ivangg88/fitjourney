import { ApplicationError } from '../../share/ApplicationError'

export class WeeklyPlanNotFoundError extends ApplicationError {
  constructor(message: string = 'Weekly plan not found') {
    super(message)
  }
}
