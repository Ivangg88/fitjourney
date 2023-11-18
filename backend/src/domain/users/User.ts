import { BaseEntity } from '../shared/baseEntity'
import { WeeklyPlan } from './WeeklyPlan'

export class User extends BaseEntity {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly height_cm: number,
    readonly weight_kg: number,
    readonly age: number,
    readonly id?: string,
    readonly weeklyPlans: WeeklyPlan[] = []
  ) {
    super(id)
  }

  public markWeeklyPlanAsActive(weeklyPlanId: string): void {
    const index = this.weeklyPlans.findIndex((wp) => wp.id === weeklyPlanId)
    this.weeklyPlans[index].isActive = true
    this.weeklyPlans[index].startedAt = new Date()
  }

  public addWeeklyPlan(weeklyPlan: WeeklyPlan): void {
    this.weeklyPlans.push(weeklyPlan)
  }

  public updateWeeklyPlan(weeklyPlan: WeeklyPlan): void {
    const index = this.weeklyPlans.findIndex((wp) => wp.id === weeklyPlan.id)
    this.weeklyPlans[index] = weeklyPlan
  }

  public markWeeklyPlanAsCompleted(weeklyPlanId: string): void {
    const index = this.weeklyPlans.findIndex((wp) => wp.id === weeklyPlanId)
    this.weeklyPlans[index].isActive = false
    this.weeklyPlans[index].isCompleted = true
    this.weeklyPlans[index].endedAt = new Date()
  }

  public markDailyPlanAsCompleted(
    weeklyPlanId: string,
    dailyPlanId: string
  ): void {
    const weeklyPlanIndex = this.weeklyPlans.findIndex(
      (wp) => wp.id === weeklyPlanId
    )
    const dailyPlanIndex = this.weeklyPlans[weeklyPlanIndex].days.findIndex(
      (dp) => dp.id === dailyPlanId
    )
    this.weeklyPlans[weeklyPlanIndex].days[dailyPlanIndex].isCompleted = true
  }

  static fromPrimitives(plainData: {
    id: string
    name: string
    email: string
    password: string
    height_cm: number
    weight_kg: number
    age: number
    weeklyPlans: WeeklyPlan[]
  }): User {
    return new User(
      plainData.name,
      plainData.email,
      plainData.password,
      plainData.height_cm,
      plainData.weight_kg,
      plainData.age,
      plainData.id,
      plainData.weeklyPlans
    )
  }
}
