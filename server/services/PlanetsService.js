import { dbContext } from "../db/DbContext.js"


class PlanetsService {

  async createPlanet(planetData) {
    const newPlanet = await dbContext.Planets.create(planetData)
    return newPlanet
  }

  async getPlanets() {
    const planets = await dbContext.Planets.find()
    return planets
  }

  async getPlanetsByGalaxy(galaxyID) {
    const planets = await dbContext.Planets.find({ galaxyID: galaxyID })
    return planets
  }

}

export const planetsService = new PlanetsService()