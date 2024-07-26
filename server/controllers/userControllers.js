import { Types } from "mongoose"

// Files
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

// Getting All Users from DB
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()

        return res.status(200).json(users)

    } catch (e) {
        console.log("Error in getAllUsers", e.message)
        res.status(500).json({ message: "Internal Server Error." })
    }
}

// Handling user Delete
export const deleteUser = async (req, res) => {
    const userId = req.params.id

    try {

        if (!Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid User id." })
        }

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: "User not Found." })
        }

        await User.findByIdAndDelete(userId)

        res.status(200).json({ message: "User deleted Successfully." })

    } catch (e) {
        console.log("Error in deleteUser controller.", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

export const updateUser = async (req, res) => {
    const userId = req.params.id
    const { profilePic } = req.body

    try {

        if (!profilePic) {
            return res.status(400).json({ message: "Provide valid Inputs." })
        }

        if (!Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid User id." })
        }

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: "User not Found." })
        }

        await User.findByIdAndUpdate(userId, {
            profilePic
        })

        res.status(200).json({ message: "User Updated Successfully." })

    } catch (error) {
        console.log("Error in updateUser controller.", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}