import { Schema, model } from 'mongoose'

export default model('Fuel', new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
}))
