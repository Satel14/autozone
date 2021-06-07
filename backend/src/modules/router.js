import { validationResult, checkSchema } from 'express-validator'
import { isValidObjectId } from 'mongoose'

import AutoController from './auto'
import BrandController from './brand'
import ModelController from './model'
import ColorController from './color'
import FuelController from './fuel'
import TransmissionController from './transmission'

export default (router) => {
  router.post('/auto/filter', async (req, res) => {
    const list = await AutoController.filter(req.body)
    return res.json(list)
  })

  router.post('/brand/list', async (req, res) => {
    const list = await BrandController.getList()
    return res.json(list)
  })

  router.post('/model/list', checkSchema({
    brandID: {
      in: 'body',
      custom: {
        options: (value) => isValidObjectId(value),
        errorMessage: 'Invalid modelID provided',
      },
    },
  }), async (req, res) => {
    const list = await ModelController.getList(req.body)
    return res.json(list)
  })

  router.post('/transmission/list', async (req, res) => {
    const list = await TransmissionController.getList()
    return res.json(list)
  })

  router.post('/fuel/list', async (req, res) => {
    const list = await FuelController.getList()
    return res.json(list)
  })

  router.post('/color/list', async (req, res) => {
    const list = await ColorController.getList()
    return res.json(list)
  })

  router.post('/auto/create', checkSchema({
    modelID: {
      in: 'body',
      custom: {
        options: (value) => isValidObjectId(value),
        errorMessage: 'Invalid modelID provided',
      },
    },
    used: {
      in: 'body',
      isBoolean: {
        errorMessage: 'Invalid type of "used" provided',
      },
    },
    'kilometrage.from': {
      in: 'body',
      isNumeric: {
        errorMessage: 'Invalid kilometrage value provided',
        options: {
          min: 0.0,
        },
      },
    },
    'kilometrage.to': {
      in: 'body',
      isNumeric: {
        errorMessage: 'Invalid kilometrage value provided',
        options: {
          min: 0.0,
        },
      },
    },
    'price.from': {
      isNumeric: {
        errorMessage: 'Invalid price value provided',
        options: {
          min: 0.0,
        },
      },
    },
    'price.to': {
      isNumeric: {
        errorMessage: 'Invalid price value provided',
        options: {
          min: 0.0,
        },
      },
    },
    'year.from': {
      isInt: {
        errorMessage: 'Invalid price value provided',
        options: {
          min: 1900,
          max: new Date().getFullYear(),
        },
      },
    },
    'year.to': {
      isInt: {
        errorMessage: 'Invalid price value provided',
        options: {
          min: 1900,
          max: new Date().getFullYear(),
        },
      },
    },
    transmissionID: {
      in: 'body',
      custom: {
        options: (value) => isValidObjectId(value),
        errorMessage: 'Invalid transmissionID provided',
      },
    },
    fuelID: {
      in: 'body',
      custom: {
        options: (value) => isValidObjectId(value),
        errorMessage: 'Invalid fuelID provided',
      },
    },
    colorID: {
      in: 'body',
      custom: {
        options: (value) => isValidObjectId(value),
        errorMessage: 'Invalid colorID provided',
      },
    },
    imageID: {
      in: 'body',
      custom: {
        options: (value) => isValidObjectId(value),
        errorMessage: 'Invalid imageID provided',
      },
    },
    description: {
      in: 'body',
      rtrim: {
        options: [' '],
      },
    },
  }), async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.json({
        errors: errors.array(),
      })
    }

    const create = await AutoController.create(req.body)
    return res.json(create)
  })

  router.post('/brand/create', checkSchema({
    name: {
      in: 'body',
      isString: {
        errorMessage: 'Invalid name provided',
      },
      trim: {
        options: [' '],
      },
    },
  }), async (req, res) => {
    const create = await BrandController.create(req.body)
    return res.json(create)
  })
}
