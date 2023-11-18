import { BaseEntity } from '../shared/baseEntity'

export class User extends BaseEntity {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly height_cm: number,
    readonly weight_kg: number,
    readonly age: number,
    readonly id?: string
  ) {
    super(id)
  }
  static fromPrimitives(plainData: {
    id: string
    name: string
    email: string
    password: string
    height_cm: number
    weight_kg: number
    age: number
  }): User {
    return new User(
      plainData.name,
      plainData.email,
      plainData.password,
      plainData.height_cm,
      plainData.weight_kg,
      plainData.age,
      plainData.id
    )
  }
}
