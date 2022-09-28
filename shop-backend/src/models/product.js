import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    title: String,
    body: String,
    price: Number,
    tags: [String],
    selectedFile: String,
    size: { type: Array },
    color: { type: Array },
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const Product = mongoose.model('Product', ProductSchema);

export default Product;