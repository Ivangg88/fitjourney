import { ApplicationError } from '../../share/ApplicationError'

export class UserAlreadyExistsError extends ApplicationError {
  constructor(email: string) {
    super(`User with email ${email} already exists`)
  }
}
