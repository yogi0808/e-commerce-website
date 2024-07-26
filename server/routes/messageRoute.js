import express from "express";

// Files
import { validateAdmin } from "../middlewares/validAdmin.js";
import { protectRoute } from "../middlewares/protectRoute.js";
import { getAllMessages, sendMessage } from "../controllers/messageControllers.js"

const router = express.Router()

router.route("/").post(sendMessage)
router.route("/").get(protectRoute, validateAdmin, getAllMessages)

export default router