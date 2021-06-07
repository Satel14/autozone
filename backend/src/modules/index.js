import { Router } from 'express'

import modulesRouter from './router'

const router = Router()

modulesRouter(router)

export default (app) => {
  app.use('/', router)
}
