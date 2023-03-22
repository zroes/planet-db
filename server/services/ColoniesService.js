import { dbContext } from "../db/DbContext.js"


class ColoniesService {
  async getColonies() {
    const colonies = await dbContext.Colonies.find()
    return colonies
  }
  async createColony(colonyData) {
    const newColony = await dbContext.Colonies.create(colonyData)
    return newColony
  }


  async getColoniesByPlanet(planetID) {
    const colonies = await dbContext.Colonies.find({ planetID }).populate('planet')
    return colonies
  }
}

export const coloniesService = new ColoniesService()