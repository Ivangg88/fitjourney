import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import express, { Router } from 'express'
import helmet from 'helmet'
import * as http from 'http'

import { registerRoutes } from './routes'
import { errorMiddleware } from './middleware/errorMiddleware'

export class Server {
  private readonly express: express.Express
  private httpServer?: http.Server

  constructor(private readonly port: string) {
    this.express = express()
    this.express.use(helmet())
    this.express.use(cors())
    this.express.use(json())
    this.express.use(urlencoded({ extended: true }))
    const router = Router()
    this.express.use(router)
    registerRoutes(router)
    this.express.use(errorMiddleware)
  }

  async listen(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        // eslint-disable-next-line no-console
        console.log(
          `✅ Backend App is running at http://localhost:${
            this.port
          } in ${this.express.get('env')} mode`
        )
        // eslint-disable-next-line no-console
        console.log('✋ Press CTRL-C to stop\n')

        resolve()
      })
    })
  }

  getHTTPServer(): Server['httpServer'] {
    return this.httpServer
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            reject(error)

            return
          }

          resolve()
        })
      }
    })
  }
}
