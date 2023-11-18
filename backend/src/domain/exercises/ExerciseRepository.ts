import { Exercise } from './Exercise'

export abstract class ExerciseRepository {
  abstract save(user: Exercise): Promise<void>
  abstract search(id: string): Promise<Exercise | null>
  // abstract searchByName(name: string): Promise<Exercise | null>
}
