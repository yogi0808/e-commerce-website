import express from "express";

// Files
import { protectRoute } from "../middlewares/protectRoute.js";
import { addToCart, removeFromCart, getCartItems, changeQuantity } from "../controllers/cartController.js";

const router = express.Router()

router.route("/").get(protectRoute, getCartItems)
router.route("/").post(protectRoute, addToCart)
router.route("/:id").post(protectRoute, changeQuantity)
router.route("/:id").delete(protectRoute, removeFromCart)

export default router