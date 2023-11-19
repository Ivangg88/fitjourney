import { MongoClient } from 'mongodb'
import { container } from 'tsyringe'
import { dbConfig } from './envs'
import { MongoUserRepository } from '../infrastructure/users/persistences/MongoUserRepository'
import { UserRepository } from '../domain/users/UserRepository'
import { UserRegister } from '../application/user/UserRegister'
import { UserLogin } from '../application/user/UserLogin'
import { LoginController } from '../app/controllers/users/LoginController'
import { UserInfo } from '../application/user/UserInfo'
import { ExerciseRepository } from '../domain/exercises/ExerciseRepository'
import { MongoExercisesRepository } from '../infrastructure/users/persistences/MongoExercicesRepository'
import { RegisterController } from '../app/controllers/users/RegisterController'
import { MeController } from '../app/controllers/users/MeController'
import { ExerciseInfo } from '../application/exercise/ExerciseInfo'
import { ExerciseByIdController } from '../app/controllers/exercises/ExerciseByIdController'
import { ActivateUserWeeklyPlan } from '../application/user/weeklyplan/ActivateUserWeeklyPlan'
import { MarkDailyPlayAsCompleted } from '../application/user/weeklyplan/MarkDailyPlayAsCompleted'
import { ActivateUserWeeklyPlanController } from '../app/controllers/users/ActivateUserWeeklyPlanController'
import { MarkDailyPlayAsCompletedController } from '../app/controllers/users/MarkDailyPlanAsComletedController'

export class DependencyInjection {
  public static async RegisterDependencies(): Promise<void> {
    await this.InstallMongoDependencies()
    this.InstallUserDependencies()
    this.InstallExerciseDependencies()
  }

  /**
   * Register dependencies for MongoDB
   */
  private static async InstallMongoDependencies(): Promise<void> {
    const mongoClient = new MongoClient(dbConfig.url)
    const client = await mongoClient.connect()
    container.registerInstance('MongoClient', client)
  }

  /**
   * Register dependencies for User
   */
  private static InstallUserDependencies(): void {
    // dependencies for user repository
    container.register<UserRepository>('UserRepository', {
      useClass: MongoUserRepository,
    })
    // dependencies for UserRegister
    container.register('UserRegister', { useClass: UserRegister })
    container.register('RegisterController', { useClass: RegisterController })
    // dependencies for UserLogin
    container.register('UserLogin', { useClass: UserLogin })
    container.register('LoginController', { useClass: LoginController })
    // dependencies for UserInfo
    container.register('UserInfo', { useClass: UserInfo })
    container.register('MeController', { useClass: MeController })

    // weekly plan
    container.register('ActivateUserWeeklyPlan', {
      useClass: ActivateUserWeeklyPlan,
    })
    container.register('ActivateUserWeeklyPlanController', {
      useClass: ActivateUserWeeklyPlanController,
    })

    // dependencies for daily plan
    container.register('MarkDailyPlayAsCompleted', {
      useClass: MarkDailyPlayAsCompleted,
    })
    container.register('MarkDailyPlayAsCompletedController', {
      useClass: MarkDailyPlayAsCompletedController,
    })
  }

  private static InstallExerciseDependencies(): void {
    // dependencies for exercise repository
    container.register<ExerciseRepository>('ExerciseRepository', {
      useClass: MongoExercisesRepository,
    })
    // dependencies for ExerciseInfo
    container.register('ExerciseInfo', { useClass: ExerciseInfo })
    container.register('ExerciseByIdController', {
      useClass: ExerciseByIdController,
    })
  }
}
