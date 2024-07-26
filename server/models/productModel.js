import { Schema, model } from "mongoose"

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        maxlength: 8
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    discount: {
        type: Number,
    },
    imgs: [
        {
            type: String,
            required: true,
        }
    ],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
            default: []
        }
    ]
}, { timestamps: true })

const Product = model("Product", productSchema)

export default Product