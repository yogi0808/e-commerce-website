import express from "express";

// files
import { validateAdmin } from "../middlewares/validAdmin.js";
import { protectRoute } from "../middlewares/protectRoute.js"
import { getAllCategories, createCategory, updateCategory, deleteCategory } from "../controllers/categoriesControllers.js";

const router = express.Router()

router.route("/").get(getAllCategories)
router.route("/").post(protectRoute, validateAdmin, createCategory)
router.route("/:id").patch(protectRoute, validateAdmin, updateCategory)
router.route("/:id").delete(protectRoute, validateAdmin, deleteCategory)

export default router