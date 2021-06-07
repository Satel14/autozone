import { Schema, model } from 'mongoose'

export default model('Model', new Schema({
  brandID: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
}), 'model')
