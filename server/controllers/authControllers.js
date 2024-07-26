import { Types } from "mongoose"

// Files
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

// Handling User Registration 
export const register = async (req, res) => {
    const { fullName, username, email, password, confirmPassword } = req.body

    if (!fullName || !username || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: "Provide required input." })
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Password do not match." })
    }


    try {

        const user = await User.findOne({ email }).select("-password")

        if (user) {
            return res.status(400).json({ message: "User already Exist." })
        }

        const img = `https://avatar.iran.liara.run/public?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            email,
            password,
            profilePic: img,
        })

        await newUser.save()

        if (!newUser) {
            return res.status(400).json({ message: "Invalid user Data." })
        }

        await generateToken(newUser._id, res)

        return res.status(201).json({ message: "user Created successfully.", user: newUser })

    } catch (e) {
        console.log("Error in register controller: ", e.message);
        res.status(500).json({ message: "Internal server error." });
    }
}

// Handling user Login
export const login = async (req, res) => {
    const { email, password } = req.body


    if (!email || !password) {
        return res.status(400).json({ message: "Provide required input." })
    }

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "Invalid user Credentials." })
        }

        const isPassValid = await user.comperePassword(password)

        if (!isPassValid) {
            return res.status(400).json({ message: "Invalid user Credentials." })
        }

        await generateToken(user._id, res)

        return res.status(200).json({ message: "Login Successfully.", user })

    } catch (e) {
        console.log("Error in Login controller: ", e.message)
        res.status(500).json({ message: "Internal server error." })
    }
}

// Handling User Logout
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        return res.status(200).json({ message: "Logged out successfully." })
    } catch (e) {
        console.log("Error in logout controller.", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}