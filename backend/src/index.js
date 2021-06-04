import express from 'express'
import cors from 'cors'

import database from './database'

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

database
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

app.listen(port)
