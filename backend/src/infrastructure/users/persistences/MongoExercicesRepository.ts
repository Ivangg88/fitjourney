import { inject, injectable } from 'tsyringe'
import { MongoClient, ObjectId } from 'mongodb'
import { MongoBaseRepository } from '../../shared/persistence/mongo/MongoBaseRepository'
import {
  Equipment,
  Exercise,
  Force,
  Level,
  Mechanic,
  Category,
} from '../../../domain/exercises/Exercise'
import { ExerciseRepository } from '../../../domain/exercises/ExerciseRepository'

interface ExerciseDocument {
  _id: string
  name: string
  force: Force
  level: Level
  mechanic: Mechanic | null
  equipment: Equipment
  primaryMuscles: string[]
  secondaryMuscles: string[]
  instructions: string[]
  category: Category
  images: string[]
  caloriesBurnedPerMinute: number
}
@injectable()
export class MongoExercisesRepository
  extends MongoBaseRepository<Exercise>
  implements ExerciseRepository
{
  constructor(@inject('MongoClient') client: MongoClient) {
    super(client)
  }

  save(exercise: Exercise): Promise<void> {
    return this.persist(exercise)
  }
  async search(id: string): Promise<Exercise | null> {
    const collection = await this.collection()
    const document = await collection.findOne<ExerciseDocument>({
      _id: new ObjectId(id),
    })
    if (!document) return null
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { _id, ...base } = document
    return document ? Exercise.fromPrimitives({ id: _id, ...base }) : null
  }

  protected collectionName(): string {
    return 'exercises'
  }
}
