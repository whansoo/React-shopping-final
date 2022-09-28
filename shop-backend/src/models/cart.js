import mongoose from "mongoose";

const { Schema } = mongoose;

const CartSchema = new Schema(
    {
        userId: { type: String, required: true },
        productId: { type: String },
        title: String,
        size: { type: Array },
        color: { type: Array },
        price: Number,
        selectedFile: String,
        quantity: { type: Number, default: 1 },
        total: Number,
    },
      { timestamps: true }
);
const Cart = mongoose.model('Cart', CartSchema);
export default Cart;