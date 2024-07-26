import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { validateAdmin } from "../middlewares/validAdmin.js";
import { deleteUser, getAllUsers, updateUser } from "../controllers/userControllers.js";

const router = express.Router()

router.route("/").get(protectRoute, validateAdmin, getAllUsers)
router.route("/:id").delete(protectRoute, deleteUser)
router.route("/:id").patch(protectRoute, updateUser)

export default router