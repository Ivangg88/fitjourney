import 'dotenv/config'

import { Server } from './Server'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'reflect-metadata'
import { appConfig } from '../config/envs'
import { DependencyInjection } from '../config/DependencyInjection'

export class App {
  server?: Server

  async start(): Promise<void> {
    await DependencyInjection.RegisterDependencies()
    this.server = new Server(appConfig.port)
    await this.server.listen()
  }

  get httpServer(): Server['httpServer'] | undefined {
    return this.server?.getHTTPServer()
  }

  async stop(): Promise<void> {
    return await this.server?.stop()
  }
}
