import { ApplicationError } from '../../share/ApplicationError'

export class DailyPlanNotFoundError extends ApplicationError {
  constructor(message: string = 'Daily plan not found') {
    super(message)
  }
}
