import { coloniesService } from "../services/ColoniesService.js"
import { planetsService } from "../services/PlanetsService.js"
import BaseController from "../utils/BaseController.js"

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanet)
      .get('', this.getPlanets)
      .get('/:planetID/colonies', this.getColoniesByPlanet)
  }

  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const newPlanet = await planetsService.createPlanet(planetData)
      res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      const planets = await planetsService.getPlanets()
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getColoniesByPlanet(req, res, next) {
    try {
      const planetID = req.params.planetID
      const colonies = await coloniesService.getColoniesByPlanet(planetID)
      res.send(colonies)
    } catch (error) {
      next(error)
    }
  }
}