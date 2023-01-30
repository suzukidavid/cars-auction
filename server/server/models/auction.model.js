import mongoose from 'mongoose'
import VehicleInfoSchema from "./vehicle-info.schema";
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
    count: {type: Number, default: 1}, //berry added: customer can bid more than 1 time.
  }],

  // berry added
  vehicleInfo: VehicleInfoSchema, // car data
  status: {
    type: String,
    enum: [ cAuctionStatus.Prepare, cAuctionStatus.MainTime, cAuctionStatus.ExtraTime, cAuctionStatus.Closed ],
    default: cAuctionStatus.Prepare
  },
  timeDuration: { type: Number, default: 0 }, // minutes
  winner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.ObjectId, ref: 'Product'},
  adver: { type: mongoose.Schema.ObjectId, ref:'Adver'}
})

export default mongoose.model('Auction', AuctionSchema)
