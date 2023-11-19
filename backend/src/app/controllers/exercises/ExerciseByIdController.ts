import { Request, Response } from 'express'
import { injectable, inject } from 'tsyringe'
import { Controller } from '../Controller'
import { HttpResponse } from '../../routes/HttpResponse'
import { InvalidCredentialsError } from '../../../application/user/InvalidCredentialsError'
import { ExerciseInfoReq } from '../../../application/exercise/schemas/exerciseInfoReqSchema'
import { ExerciseInfo } from '../../../application/exercise/ExerciseInfo'
import { ExerciseNotFound } from '../../../application/exercise/errors/ExerciseNotFound'

type ExerciseRequest = Request & { body: ExerciseInfoReq }

@injectable()
export class ExerciseByIdController implements Controller {
  constructor(
    @inject('ExerciseInfo') private readonly exerciseInfo: ExerciseInfo
  ) {}

  async run(req: ExerciseRequest, res: Response): Promise<void> {
    try {
      const data = await this.exerciseInfo.run({ id: req.params.id! })
      HttpResponse.Ok(res, data)
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        HttpResponse.Unauthorized(res, error.message)
      } else if (error instanceof ExerciseNotFound) {
        HttpResponse.NotFound(res, error.message)
      }
    }
  }
}
