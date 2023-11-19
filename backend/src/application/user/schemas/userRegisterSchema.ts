import z from 'zod'
import { userSchema } from '../../../domain/schemas/userSchema'

export const userRegisterSchema = userSchema.pick({
  email: true,
  name: true,
  password: true,
  height_cm: true,
  weight_kg: true,
  age: true,
})

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>
