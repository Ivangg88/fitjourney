import z from 'zod'
import { userSchema } from '../../../domain/schemas/userSchema'

export const userInfoResSchema = userSchema.omit({
  id: true,
  password: true,
})

export type UserInfoRes = z.infer<typeof userInfoResSchema>
