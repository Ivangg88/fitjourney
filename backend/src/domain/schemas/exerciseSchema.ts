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
  force: z.nativeEnum(Force),
  level: z.nativeEnum(Level),
  mechanic: z.nativeEnum(Mechanic).nullable(),
  equipment: z.nativeEnum(Equipment),
  primaryMuscles: z.array(z.string()).nonempty(),
  secondaryMuscles: z.array(z.string()),
  instructions: z.array(z.string()).nonempty(),
  category: z.nativeEnum(Category),
  images: z.array(z.string()).nonempty(),
  caloriesBurnedPerMinute: z.number().positive(),
})
