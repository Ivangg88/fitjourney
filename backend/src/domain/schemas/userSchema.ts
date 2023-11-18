import { z } from '../../openapi/zod'

export const userSchema = z.object({
  id: z.string().optional(),
  email: z.string().email().openapi({ example: 'user@example.cat' }),
  password: z.string().min(8),
  name: z.string().nonempty(),
  height_cm: z.number().positive(),
  weight_kg: z.number().positive(),
  age: z.number().positive(),
})
