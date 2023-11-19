import z from 'zod'
import { exerciseSchema } from '../../../domain/schemas/exerciseSchema'

export const exerciseInfoReqSchema = exerciseSchema.pick({
  id: true,
})

export type ExerciseInfoReq = z.infer<typeof exerciseInfoReqSchema>
