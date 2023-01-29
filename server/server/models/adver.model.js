import mongoose from 'mongoose'
import vehicleSchema from "./vehicle-info.schema";

const AdverSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: 'Title is required'
    },
    image: {
        data: Buffer,
        contentType: String
    },
    childImages: [{
        data: Buffer,
        contentType: String
    }],
    description: {
        type: String,
        trim: true
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
    vehicleInfo: vehicleSchema, // car info
    seller: { type: mongoose.Schema.ObjectId, ref: 'User'  }
})

export default mongoose.model('Adver', AdverSchema)
