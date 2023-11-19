import { NotFound } from '../../../domain/shared/errors/NotFound'

export class ExerciseNotFound extends NotFound {
  constructor(message: string = 'Exercise Not Found') {
    super(message)
  }
}
