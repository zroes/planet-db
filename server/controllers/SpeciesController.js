import { speciesService } from "../services/SpeciesService.js"
import BaseController from "../utils/BaseController.js"

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .post('', this.newSpecies)
      .get('', this.getSpecies)
  }
  async newSpecies(req, res, next) {
    try {
      const speciesData = req.body
      console.log(req.body)
      const species = await speciesService.newSpecies(speciesData)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async getSpecies(req, res, next) {
    try {
      const species = await speciesService.getSpecies()
      res.send(species)
    } catch (error) {
      next(error)
    }
  }
}