import mongoose from 'mongoose'
import VehicleSchema from "./vehicle.schema";
import { cAuctionStatus } from '../../config/constants'

const AuctionSchema = new mongoose.Schema({
  itemName: {
    type: String,
    trim: true,
    required: 'Item name is required'
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    data: Buffer,
    contentType: String
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  bidStart: {
    type: Date,
    default: Date.now
  },
  bidEnd: {
    type: Date,
    required: "Auction end time is required"
  },
  seller: {
    type: mongoose.Schema.ObjectId, 
    ref: 'User'
  },
  startingBid: { type: Number, default: 0 }, // starting price
  bids: [{
    bidder: {type: mongoose.Schema.ObjectId, ref: 'User'},
    bid: Number, //berry: price
    time: Date,
    count: {type: Number, default: 1},//berry added: customer can bid more than 1 time.
  }],

  // berry added
  vehicleInfo: VehicleSchema, // car data
  status: {
    type: String,
    enum: [ cAuctionStatus.MainTime, cAuctionStatus.ExtraTime, cAuctionStatus.Closed ],
    default: cAuctionStatus.MainTime
  },
  winner: { type: mongoose.Schema.ObjectId, ref: 'User' }
})

export default mongoose.model('Auction', AuctionSchema)
