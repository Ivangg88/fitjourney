import { BaseEntity } from '../shared/baseEntity'

export class User extends BaseEntity {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly id?: string
  ) {
    super(id)
  }
}
