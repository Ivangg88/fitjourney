import { BaseEntity } from '../shared/baseEntity'

export enum Level {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Expert = 'expert',
}

export enum Force {
  Pull = 'pull',
  Push = 'push',
  Static = 'static',
}

export enum Mechanic {
  Compound = 'compound',
  Isolation = 'isolation',
}

export enum Equipment {
  BodyOnly = 'body only',
}

export enum Category {
  Plyometrics = 'plyometrics',
  Strength = 'strength',
  Stretching = 'stretching',
}
interface ExercisePrimitives {
  name: string
  force: string
  level: string
  mechanic: string | null
  equipment: string
  primaryMuscles: string[]
  secondaryMuscles: string[]
  instructions: string[]
  category: string
  images: string[]
  caloriesBurnedPerMinute: number
  id: string
}

export class Exercise extends BaseEntity {
  constructor(
    readonly name: string,
    readonly force: Force,
    readonly level: Level,
    readonly mechanic: Mechanic | null,
    readonly equipment: Equipment,
    readonly primaryMuscles: [string, ...string[]],
    readonly secondaryMuscles: [string, ...string[]],
    readonly instructions: [string, ...string[]],
    readonly category: Category,
    readonly images: string[],
    readonly caloriesBurnedPerMinute: number,
    readonly id: string
  ) {
    super(id)
  }
  static fromPrimitives(plainData: {
    name: string
    force: Force
    level: Level
    mechanic: Mechanic | null
    equipment: Equipment
    primaryMuscles: string[]
    secondaryMuscles: string[]
    instructions: string[]
    category: Category
    images: string[]
    caloriesBurnedPerMinute: number
    id: string
  }): Exercise {
    return new Exercise(
      plainData.name,
      plainData.force,
      plainData.level,
      plainData.mechanic,
      plainData.equipment,
      plainData.primaryMuscles,
      plainData.secondaryMuscles,
      plainData.instructions,
      plainData.category,
      plainData.images,
      plainData.caloriesBurnedPerMinute,
      plainData.id
    )
  }
  toPrimitives(): ExercisePrimitives {
    return {
      name: this.name,
      force: this.force.toString(),
      level: this.level.toString(),
      mechanic: this.mechanic ? this.mechanic.toString() : null,
      equipment: this.equipment.toString(),
      primaryMuscles: this.primaryMuscles,
      secondaryMuscles: this.secondaryMuscles,
      instructions: this.instructions,
      category: this.category.toString(),
      images: this.images,
      caloriesBurnedPerMinute: this.caloriesBurnedPerMinute,
      id: this.id,
    }
  }
  // Métodos adicionales según sea necesario
}
