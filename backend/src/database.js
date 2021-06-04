import mongoose from 'mongoose'

import { production, development } from './configs/db'

const dbData = process.env.NODE_ENV === 'production' ? production : development

const database = mongoose
  .connect(`mongodb+srv://${dbData.username}:${dbData.password}@${dbData.host}/${dbData.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

export default database
