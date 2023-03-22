import mongoose from "mongoose"
const Schema = mongoose.Schema

export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 50 },
    biome: { type: String, required: true, maxLength: 100 },
    breathableAtmosphere: { type: Boolean, default: false },
    galaxyID: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
  }
)

