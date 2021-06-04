import { Schema, model } from 'mongoose'

export default model('Auto', new Schema({
  modelID: {
    type: Schema.Types.ObjectId,
    ref: 'Model',
    required: true,
  },
  used: {
    type: Boolean,
    default: () => false,
  },
  price: {
    type: Number,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  transmissionID: {
    type: Schema.Types.ObjectId,
    ref: 'Transmission',
    require: true,
  },
  fuelID: {
    type: Schema.Types.ObjectId,
    ref: 'Fuel',
    require: true,
  },
  colorID: {
    type: Schema.Types.ObjectId,
    ref: 'Color',
    require: true,
  },
}), 'auto')