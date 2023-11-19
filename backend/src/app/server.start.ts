/* eslint-disable no-console */
import { App } from './App'

try {
  // eslint-disable-next-line no-void
  void new App().start()
} catch (e) {
  console.error(e)
  process.exit(1)
}

process.on('uncaughtException', (err) => {
  console.error('Hubo una excepción no capturada: ', err)
  process.exit(1)
})
