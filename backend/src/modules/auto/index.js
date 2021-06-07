export default class AutoController {
  static async filter({
    modelID, used, kilometrage, price, year, transmissionID,
    fuelID, colorID, limit, byFavorite, byDate,
  }) {
    // const errors = []
    // if (!errors.length) return { finded: false }

    const filterValues = {
      modelID,
      used,
      kilometrage,
      price,
      year,
      transmissionID,
      fuelID,
      colorID,
      limit,
      byFavorite,
      byDate,
    }

    // try {

    // } catch (e) {
    //   console.error(e)
    //   return { finded: false }
    // }

    return filterValues
  }

  static async create({
    modelID, used, kilometrage, price, year, transmissionID,
    fuelID, colorID, imageID, description,
  }) {
    // const errors = []
    // if (!errors.length) return { created: false }

    const filterValues = {
      modelID,
      used,
      kilometrage,
      price,
      year,
      transmissionID,
      fuelID,
      colorID,
      imageID,
      description,
    }

    // try {

    // } catch (e) {
    //   console.error(e)
    //   return { created: false }
    // }

    return filterValues
  }
}
