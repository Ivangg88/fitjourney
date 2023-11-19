import { injectable, inject } from 'tsyringe'
import { ObjectId } from 'mongodb'
import { User } from '../../domain/users/User'
import { UserRepository } from '../../domain/users/UserRepository'
import { UserRegisterSchema } from './schemas/userRegisterSchema'
import { hashPassword } from '../share/passwordHash'
import { UserAlreadyExistsError } from './errors/UserAlreadyExistsError'
import { WeeklyPlan } from '../../domain/users/WeeklyPlan'
import { DailyPlan } from '../../domain/users/DailyPlan'
import { ExerciseRepository } from '../../domain/exercises/ExerciseRepository'

@injectable()
export class UserRegister {
  constructor(
    @inject('UserRepository') private readonly repository: UserRepository,
    @inject('ExerciseRepository')
    private readonly weeklyPlan: ExerciseRepository
  ) {}

  async run({
    name,
    email,
    password,
    height_cm,
    weight_kg,
    age,
  }: UserRegisterSchema): Promise<void> {
    // search user by email
    // if user exists, throw error
    const userExists = await this.repository.searchByEmail(email)
    if (userExists) {
      throw new UserAlreadyExistsError(email)
    }
    const hashedPassword = await hashPassword(password)

    // create daily plans
    const dailyPlans: DailyPlan[] = []
    const exercises = await this.weeklyPlan.getRandomExercises()

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 7; i++) {
      const dailyPlan = new DailyPlan(
        i + 1,
        [exercises[Math.floor(Math.random() * exercises.length)]],
        new ObjectId().toHexString(),
        Math.floor(Math.random() * 100)
      )
      dailyPlans.push(dailyPlan)
    }

    // create a brand new weekly plan
    const weeklyPlan = new WeeklyPlan(dailyPlans, new ObjectId().toHexString())

    const user = new User(
      name,
      email,
      hashedPassword,
      height_cm,
      weight_kg,
      age
    )
    user.addWeeklyPlan(weeklyPlan)

    await this.repository.save(user)
  }
}
