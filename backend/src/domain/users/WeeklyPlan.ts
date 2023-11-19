import { DailyPlan } from './DailyPlan'

export class WeeklyPlan {
  constructor(
    public days: DailyPlan[],
    public id?: string,
    public startedAt?: Date,
    public endedAt?: Date,
    public isActive: boolean = false,
    public isCompleted: boolean = false
  ) {
    if (days.length !== 7) {
      throw new Error('A weekly plan can have a maximum of 7 daily plans')
    }
  }
}
