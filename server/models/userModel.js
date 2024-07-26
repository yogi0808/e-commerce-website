import { Schema, model } from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        maxlength: 25,
        minlength: 3,
    },
    username: {
        type: String,
        required: true,
        maxlength: 15,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    cart: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            minimum: 1
        }
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order",
        default: []
    }],
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    profilePic: {
        type: String,
        required: true
    },

}, { timestamps: true })


userSchema.pre("save", async function (next) {
    try {
        const saltRound = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(this.password, saltRound)

        this.password = hashPassword
    } catch (e) {
        next(e)
    }
})

userSchema.methods.comperePassword = async function (pass) {
    return await bcrypt.compare(pass, this.password)
}

const User = model("User", userSchema)

export default User