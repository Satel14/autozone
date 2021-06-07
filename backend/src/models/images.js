import { Schema, model } from 'mongoose'

export default model('Image', new Schema({
  file: {
    type: Schema.Types.Buffer,
    contentType: String,
    unique: true,
    required: true,
  },
}))
