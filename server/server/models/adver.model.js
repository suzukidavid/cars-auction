import mongoose from 'mongoose'

const AdverSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: 'Title is required'
    },
    image: { //large image for ads
        data: Buffer,
        contentType: String
    },
    childImages: [{ // small images for ads
        data: Buffer,
        contentType: String
    }],
    description: {
        type: String,
        trim: true
    },
    updated: Date,
    created: {
      type: Date,
      default: Date.now
    },
    seller: { type: mongoose.Schema.ObjectId, ref: 'User'  },
    product: { type: mongoose.Schema.ObjectId, ref: 'Product'  }
})

export default mongoose.model('Adver', AdverSchema)
