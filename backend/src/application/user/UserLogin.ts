import { inject, injectable } from 'tsyringe'
import { UserRepository } from '../../domain/users/UserRepository'
import { UserLoginReq } from './schemas/userLoginReqSchema'
import { checkPassword } from '../share/passwordHash'
import { UserLoginRes } from './schemas/userLoginResSchema'
import { InvalidCredentialsError } from './InvalidCredentialsError'

@injectable()
export class UserLogin {
  constructor(
    @inject('UserRepository') private readonly repository: UserRepository
  ) {}

  async run({ email, password }: UserLoginReq): Promise<UserLoginRes> {
    const user = await this.repository.searchByEmail(email)
    if (!user) {
      throw new InvalidCredentialsError('Invalid Credential')
    }
    if (!(await checkPassword(password, user.password))) {
      throw new InvalidCredentialsError('Invalid Credential')
    }

    return { id: user.id }
  }
}
