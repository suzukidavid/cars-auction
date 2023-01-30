import mongoose from 'mongoose'
import vehicleSchema from "./vehicle-info.schema";
import {cSaleType} from "../../config/constants";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  category: { //<<_ berry: I think here are unnecessary
    type: String
  },
  quantity: {
    type: Number,
    // required: "Quantity is required"
    default: 1
  },
  price: {
    type: Number,
    required: "Price is required"
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  shop: {type: mongoose.Schema.ObjectId, ref: 'Shop'}, // berry: I think it's unnecessary.

  /////
  vehicleInfo: vehicleSchema, // car info
  seller: { type: mongoose.Schema.ObjectId, ref: 'User'  },
  type: { type: String, enum: [cSaleType.FixedPrice, cSaleType.Auction]},
  auction: { type: mongoose.Schema.ObjectId, ref: 'Auction' },
  adver: { type: mongoose.Schema.ObjectId, ref: 'Adver' }
})

export default mongoose.model('Product', ProductSchema)
