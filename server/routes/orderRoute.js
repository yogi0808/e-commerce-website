import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { changeStatus, createOrder, getAllOrders, getUserOrders } from "../controllers/orderControllers.js"
import { validateAdmin } from "../middlewares/validAdmin.js";

const router = express.Router()

router.route("/all").get(protectRoute, validateAdmin, getAllOrders)
router.route("/").get(protectRoute, getUserOrders)
router.route("/").post(protectRoute, createOrder)
router.route("/:id").patch(protectRoute, changeStatus)

export default router