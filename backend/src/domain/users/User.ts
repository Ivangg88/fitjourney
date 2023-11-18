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
}
