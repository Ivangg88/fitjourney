import { inject, injectable } from 'tsyringe'
import { ExerciseRepository } from '../../domain/exercises/ExerciseRepository'
import { ExerciseInfoReq } from './schemas/exerciseInfoReqSchema'
import { ExerciseNotFound } from './errors/ExerciseNotFound'
import { ExerciseType } from '../../domain/schemas/exerciseSchema'

@injectable()
export class ExerciseInfo {
  constructor(
    @inject('ExerciseRepository')
    private readonly repository: ExerciseRepository
  ) {}

  async run({ id }: ExerciseInfoReq): Promise<ExerciseType> {
    const exercise = await this.repository.search(id)
    if (!exercise) {
      throw new ExerciseNotFound()
    }

    return exercise.toPrimitives()
  }
}
