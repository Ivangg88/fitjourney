import { inject, injectable } from 'tsyringe'
import { UserRepository } from '../../domain/users/UserRepository'
import { InvalidCredentialsError } from './InvalidCredentialsError'
import { UserInfoReq } from './schemas/userInfoReqSchema'
import { UserInfoRes } from './schemas/userInfoResSchema'

@injectable()
export class UserInfo {
  constructor(
    @inject('UserRepository') private readonly repository: UserRepository
  ) {}

  async run({ id }: UserInfoReq): Promise<UserInfoRes> {
    const user = await this.repository.search(id)
    if (!user) {
      throw new InvalidCredentialsError('Invalid Credential')
    }
    const { id: userId, password, ...base } = user

    return base
  }
}
