import mongoose from "mongoose";
const Schema = mongoose.Schema

const House = new Schema(
  {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    floors: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, maxlength: 50 },
    imgUrl: { type: String, default: "http://placehold.it/200x200" }
  }
)

export default House