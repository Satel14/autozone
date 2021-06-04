import { Schema, model } from 'mongoose'

export default model('Color', new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
}), 'color')
