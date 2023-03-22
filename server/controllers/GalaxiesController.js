import { galaxiesService } from "../services/GalaxiesService.js"
import { planetsService } from "../services/PlanetsService.js"
import BaseController from "../utils/BaseController.js"

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .post('', this.createGalaxy)
      .get('', this.getGalaxies)
      .get('/:galaxyID/planets', this.getPlanetsByGalaxy)
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const newGalaxy = await galaxiesService.createGalaxy(galaxyData)
      res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.getGalaxies()
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetsByGalaxy(req, res, next) {
    try {
      const galaxyID = req.params.galaxyID
      const planets = await planetsService.getPlanetsByGalaxy(galaxyID)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

}