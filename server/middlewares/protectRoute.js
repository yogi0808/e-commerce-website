import jwt from "jsonwebtoken"

// Files
import User from "../models/userModel.js"

// Checking User is Logged in Or not
export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - NO Token Provided." })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRETE)

        if (!decode) {
            return res.status(401).json({ message: "Unauthorized - Invalid Token" })
        }

        const user = await User.findById(decode.userId).select("-password")

        if (!user) {
            return res.status(404).json({ message: "User not Found." })
        }

        req.user = user

        next()
    } catch (e) {
        console.log("Error in protectRoute middleware: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}