import { Exercise } from '../exercises/Exercise'

export class DailyPlan {
  constructor(
    public dayOfWeek: number,
    public exercises: Exercise[],
    public id?: string,
    public experience = 10,
    public isCompleted: boolean = false
  ) {}
}
