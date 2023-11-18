import { injectable, inject } from 'tsyringe'
import { User } from '../../domain/users/User'
import { UserRepository } from '../../domain/users/UserRepository'
import { UserRegisterSchema } from './schemas/userRegisterSchema'
import { hashPassword } from '../share/passwordHash'
import { UserAlreadyExistsError } from './errors/UserAlreadyExistsError'

@injectable()
export class UserRegister {
  constructor(
    @inject('UserRepository') private readonly repository: UserRepository
  ) {}

  async run({
    name,
    email,
    password,
    height_cm,
    weight_kg,
    age,
  }: UserRegisterSchema): Promise<void> {
    // search user by email
    // if user exists, throw error
    const userExists = await this.repository.search(email)
    if (userExists) {
      throw new UserAlreadyExistsError(email)
    }
    const hashedPassword = await hashPassword(password)
    const user = new User(
      name,
      email,
      hashedPassword,
      height_cm,
      weight_kg,
      age
    )

    await this.repository.save(user)
  }
}
