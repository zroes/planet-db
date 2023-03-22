import mongoose from "mongoose"
const Schema = mongoose.Schema

export const SpeciesSchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 40 },
  },
  { timestamps: true }
)