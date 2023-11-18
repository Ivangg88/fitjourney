import { inject, injectable } from 'tsyringe'
import { MongoClient, ObjectId } from 'mongodb'
import { User } from '../../../domain/users/User'
import { UserRepository } from '../../../domain/users/UserRepository'
import { MongoBaseRepository } from '../../shared/persistence/mongo/MongoBaseRepository'
import { WeeklyPlan } from '../../../domain/users/WeeklyPlan'

interface UserDocument {
  _id: string
  name: string
  email: string
  password: string
  height_cm: number
  weight_kg: number
  age: number
  weeklyPlans: WeeklyPlan[]
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
  async search(id: string): Promise<User | null> {
    const collection = await this.collection()
    const document = await collection.findOne<UserDocument>({
      _id: new ObjectId(id),
    })
    if (!document) return null
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { _id, ...base } = document
    return document ? User.fromPrimitives({ id: _id, ...base }) : null
  }
  async searchByEmail(userEmail: string): Promise<User | null> {
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
