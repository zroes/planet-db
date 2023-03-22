import mongoose from "mongoose"
const Schema = mongoose.Schema

export const ColonySchema = new Schema(
  {
    name: { type: String, required: true },
    population: { type: Number, required: true },
    planetID: { type: Schema.Types.ObjectId, required: true, ref: "Planet" },
    speciesID: { type: Schema.Types.ObjectId, required: true, ref: "Species" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ColonySchema.virtual('planet', {
  localField: 'planetID',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})
