import { Schema, model } from 'mongoose'

export default model('Transmission', new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
}), 'transmission')
