import { User } from './User'

export abstract class UserRepository {
  abstract save(user: User): Promise<void>
  abstract search(id: string): Promise<User | null>
  abstract searchByEmail(userEmail: string): Promise<User | null>
}
