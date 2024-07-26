import { Schema, model } from "mongoose"

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    message: {
        type: String,
        minlength: 3,
        maxlength: 150
    },
    ratting: {
        type: Number,
        required: true,
        maxlength: 1
    }
}, { timestamps: true })

const Review = model("Review", reviewSchema)

export default Review