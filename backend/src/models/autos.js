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
  kilometrage: {
    type: Number,
    default: () => 0,
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
  colorIDList: {
    type: [Schema.Types.ObjectId],
    ref: 'Color',
    require: true,
  },
  imageID: {
    type: Schema.Types.ObjectId,
    ref: 'Image',
    require: true,
  },
}))
