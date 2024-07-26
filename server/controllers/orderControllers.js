import { Types } from "mongoose"
import Order from "../models/orderModel.js"
import User from "../models/userModel.js"

export const getUserOrders = async (req, res) => {
    const userId = req.user._id

    try {

        const orders = await Order.find({ user: userId })

        res.status(200).json(orders)

    } catch (e) {
        console.log("Error in getOrders controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

export const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find({}).populate("products.product")

        res.status(200).json(orders)

    } catch (e) {
        console.log("Error in getAllOrders controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

export const createOrder = async (req, res) => {
    const body = req.body
    const user = req.user

    try {
        const isDataValid = validateData(body)

        if (!isDataValid) {
            return res.status(400).json({ message: "Provide valid Inputs." })
        }

        const order = new Order({
            user: user._id,
            ...body
        })

        await order.save()

        await User.findByIdAndUpdate(user._id, {
            cart: [],
            $push: {
                orders: order._id
            }
        })

        res.status(200).json({ message: "Order placed Successfully.", order })
    } catch (e) {
        console.log("Error in createOrder controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

export const changeStatus = async (req, res) => {
    const { status } = req.body
    const orderId = req.params.id

    try {

        if (!status) {
            return res.status(400).json({ message: "Provide valid Inputs." })
        }

        if (!Types.ObjectId.isValid(orderId)) {
            return res.status(400).json({ message: "Invalid Order Id." })
        }

        const order = Order.findById(orderId)

        if (!order) {
            return res.state(404).json({ message: "Order not Found." })
        }

        await Order.findByIdAndUpdate(orderId, {
            $set: { status }
        })

        return res.status(200).json({ message: "Status hash Changed." })

    } catch (e) {
        console.log("Error in changeStatus controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

const validateData = (data) => {
    const { firstName, lastName, phoneNumber, email, street, country, city, state, zip, paymentMethod, cardNumber, cardExpiry, cardCVC, upi, totalPrice, products } = data


    if (!firstName || !lastName || !phoneNumber || !email || !street || !country || !city || !state || !zip || !paymentMethod || !totalPrice || (products.length <= 0)) {
        return false
    }

    if (paymentMethod === "card" && (!cardNumber || !cardExpiry || !cardCVC)) {
        return false

    }

    if (paymentMethod === "upi" && !upi) {
        return false
    }

    if (phoneNumber.length !== 10 || zip.length !== 6) {
        return false
    }

    if (paymentMethod === "card" && (cardNumber.length !== 16 && cardCVC !== 3)) {
        return false
    }

    return true
}