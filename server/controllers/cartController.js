import { Types } from "mongoose"

// Files
import User from "../models/userModel.js"
import Product from "../models/productModel.js"


export const getCartItems = async (req, res) => {
    const user = req.user
    try {

        const userData = await User.findById(user._id).populate({
            path: 'cart',
            populate: {
                path: 'product',
                model: 'Product'
            }
        })

        return res.status(200).json(userData.cart)

    } catch (e) {
        console.log("Error in getCartItems controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}


// Adding Products to User Cart
export const addToCart = async (req, res) => {
    const { productId, quantity } = req.body
    const userId = req.user._id

    if (!productId || !quantity) {
        return res.status(400).json({ message: "Provide valid Inputs." })
    }

    try {

        if (!Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: "Invalid Product Id." })
        }

        const product = await Product.findById(productId)

        if (!product) {
            return res.status(404).json({ message: "Product not Found." })
        }

        const existingCartItem = await User.find({
            _id: userId,
            cart: {
                $elemMatch: {
                    product: productId
                }
            }
        })

        if (existingCartItem.length >= 1) {
            return res.status(400).json({ message: "Already added to Cart." })
        }

        await User.findByIdAndUpdate(userId, {
            $push: {
                cart: {
                    product: new Types.ObjectId(productId),
                    quantity
                }
            }
        })

        res.status(200).json({
            message: "Product add to Cart Successfully.", product
        })

    } catch (e) {
        console.log("Error in addToCart controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

// Removing Product from Cart
export const removeFromCart = async (req, res) => {
    const itemId = req.params.id
    const userId = req.user._id

    if (!itemId) {
        return res.status(400).json({ message: "Provide valid Inputs." })
    }

    if (!Types.ObjectId.isValid(itemId)) {
        return res.status(400).json({ message: "Invalid Cart item." })
    }

    try {

        await User.findByIdAndUpdate(userId, {
            $pull: {
                cart: {
                    _id: itemId
                }
            }
        })

        res.status(200).json({ message: "Item remove from Cart." })

    } catch (e) {
        console.log("Error in removeFromCart controller: ", e.message)
    }
}

// Changing Quantity of Cart Product
export const changeQuantity = async (req, res) => {
    const itemId = req.params.id
    const user = req.user

    const { quantity } = req.body

    try {
        if (!quantity) {
            return res.status(400).json({ message: "Provide valid Inputs." })
        }

        if (quantity <= 0) {
            return res.status(400).json({ message: "Quantity must be Bigger then 0." })
        }

        await User.updateOne({ _id: user._id, 'cart._id': itemId },
            {
                $set: { "cart.$.quantity": quantity }
            }
        )

        res.status(200).json({ message: "Quantity Updated." })

    } catch (e) {
        console.log("Error in changeQuantity controller: ", e.message)` `
        res.status(500).json({ message: "Internal server Error." })
    }
}