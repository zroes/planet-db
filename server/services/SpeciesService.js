import { dbContext } from "../db/DbContext.js"

class SpeciesService {
  async newSpecies(speciesData) {
    const species = await dbContext.Species.create(speciesData)
    return species
  }

  async getSpecies() {
    const species = await dbContext.Species.find()
    return species
  }

}

export const speciesService = new SpeciesService()