import { Schema, model } from "mongoose"

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    firstName: {
        type: String,
        maxlegnth: 25,
        required: true
    },
    lastName: {
        type: String,
        maxlegnth: 25,
        required: true
    },
    phoneNumber: {
        type: Number,
        maxlegnth: 10,
        required: true,
    },
    email: {
        type: String,
        maxlegnth: 50,
        required: true
    },
    street: {
        type: String,
        maxlegnth: 50,
        required: true
    },
    country: {
        type: String,
        maxlegnth: 25,
        required: true
    },
    city: {
        type: String,
        maxlegnth: 25,
        required: true
    },
    state: {
        type: String,
        maxlegnth: 25,
        required: true
    },
    zip: {
        type: Number,
        maxlegnth: 6,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ["card", "upi", "cod"],
        required: true,
    },
    cardNumber: {
        type: Number,
        maxlegnth: 16,
        required: function () {
            return this.paymentMethod === "card"
        }
    },
    cardExpiry: {
        type: String,
        maxlegnth: 25,
        required: function () {
            return this.paymentMethod === "card"
        }
    },
    cardCVC: {
        type: Number,
        maxlegnth: 3,
        required: function () {
            return this.paymentMethod === "card"
        }
    },
    upi: {
        type: String,
        maxlegnth: 40,
        required: function () {
            return this.paymentMethod === "upi"
        }
    },
    totalPrice: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Processing",
        enum: ["Processing", "PickupAvailable", "Cancelled", "Delivered"]
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                required: true,
            }
        }
    ]
}, { timestamps: true })

const Order = model("Order", orderSchema)

export default Order
