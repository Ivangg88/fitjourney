import { inject, injectable } from 'tsyringe'
import { MongoClient } from 'mongodb'
import { User } from '../../../domain/users/User'
import { UserRepository } from '../../../domain/users/UserRepository'
import { MongoBaseRepository } from '../../shared/persistence/mongo/MongoBaseRepository'

interface UserDocument {
  _id: string
  name: string
  email: string
  password: string
}
@injectable()
export class MongoUserRepository
  extends MongoBaseRepository<User>
  implements UserRepository
{
  constructor(@inject('MongoClient') client: MongoClient) {
    super(client)
  }

  save(user: User): Promise<void> {
    return this.persist(user)
  }
  async search(userEmail: string): Promise<User | null> {
    const collection = await this.collection()
    const document = await collection.findOne<UserDocument>({
      email: userEmail,
    })
    if (!document) return null
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { _id, ...base } = document
    return document ? User.fromPrimitives({ id: _id, ...base }) : null
  }

  protected collectionName(): string {
    return 'users'
  }
}
