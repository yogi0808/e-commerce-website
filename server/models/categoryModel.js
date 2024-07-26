import { Schema, model } from "mongoose"

const categorySchema = new Schema({
    category: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
        unique: true
    },
}, { timestamps: true })

const Category = model("Category", categorySchema)

export default Category