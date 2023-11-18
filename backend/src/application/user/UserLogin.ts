import { injectable } from 'tsyringe'
import { UserRepository } from '../../domain/users/UserRepository'
import { UserLoginReq } from './schemas/userLoginReqSchema'
import { checkPassword } from '../share/passwordHash'
import { UserLoginRes } from './schemas/userLoginResSchema'

@injectable()
export class UserLogin {
  constructor(private readonly repository: UserRepository) {}

  async run({ email, password }: UserLoginReq): Promise<UserLoginRes> {
    const user = await this.repository.search(email)
    if (!user) {
      throw new Error('Invalid Credentials')
    }

    if (!(await checkPassword(password, user.password))) {
      throw new Error('Invalid Credentials')
    }

    return { id: user.id }
  }
}
