import { coloniesService } from "../services/ColoniesService.js"
import BaseController from "../utils/BaseController.js"


export class ColoniesController extends BaseController {
  constructor() {
    super('api/colonies')
    this.router
      .post('', this.createColony)
      .get('', this.getColonies)
  }

  async createColony(req, res, next) {
    try {
      const colonyData = req.body
      const newColony = await coloniesService.createColony(colonyData)
      res.send(newColony)
    } catch (error) {
      next(error)
    }
  }

  async getColonies(req, res, next) {
    try {
      const colonies = await coloniesService.getColonies()
      res.send(colonies)
    } catch (error) {
      next(error)
    }
  }
}