import express from "express"

// files
import { protectRoute } from "../middlewares/protectRoute.js"
import { login, logout, register } from "../controllers/authControllers.js"

const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(protectRoute, logout)

export default router