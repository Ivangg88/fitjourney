import z from 'zod'
import { userSchema } from '../../../domain/schemas/userSchema'

export const userInfoReqSchema = userSchema.pick({
  id: true,
})

export type UserInfoReq = z.infer<typeof userInfoReqSchema>
