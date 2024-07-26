import { Schema, model } from "mongoose"

const messageSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        maxlength: 25,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    message: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 150,
    }
}, { timestamps: true })

const Message = model("Message", messageSchema)

export default Message