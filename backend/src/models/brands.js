import { Schema, model } from 'mongoose'

export default model('Brand', new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
}))
