import { z } from '../../openapi/zod'
import {
  Category,
  Equipment,
  Force,
  Level,
  Mechanic,
} from '../exercises/Exercise'

export const exerciseSchema = z.object({
  id: z.string(),
  name: z.string().nonempty(),
  force: z.union([z.nativeEnum(Force), z.string()]),
  level: z.union([z.nativeEnum(Level), z.string()]),
  mechanic: z.union([z.nativeEnum(Mechanic), z.string()]).nullable(),
  equipment: z.union([z.nativeEnum(Equipment), z.string()]),
  primaryMuscles: z.array(z.string()),
  secondaryMuscles: z.array(z.string()),
  instructions: z.array(z.string()),
  category: z.union([z.nativeEnum(Category), z.string()]),
  images: z.array(z.string()),
  caloriesBurnedPerMinute: z.number().positive(),
})

export type ExerciseType = z.infer<typeof exerciseSchema>
