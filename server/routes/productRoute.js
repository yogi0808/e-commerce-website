import express from "express";

// Files
import { validateAdmin } from "../middlewares/validAdmin.js";
import { protectRoute } from "../middlewares/protectRoute.js";
import { getSingleProduct, createProduct, deleteProduct, getAllProducts } from "../controllers/productControllers.js";

const router = express.Router()

router.route("/:id").get(getSingleProduct)
router.route("/").get(getAllProducts)
router.route("/:id").delete(protectRoute, validateAdmin, deleteProduct)
router.route("/").post(protectRoute, validateAdmin, createProduct)

export default router