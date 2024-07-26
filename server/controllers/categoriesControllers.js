import { Types } from "mongoose"

// Files
import Category from "../models/categoryModel.js"

// Getting All Categories from DB
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({})

        if (!categories || categories.length <= 0) {
            return res.status(404).json({ message: "Categories not Found." })
        }

        res.status(200).json(categories)

    } catch (e) {
        console.log("Error in getAllCategories controller.", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

// Creating new Category
export const createCategory = async (req, res) => {
    const { category } = req.body

    if (!category) {
        return res.status(400).json({ message: "Provide valid Input." })
    }

    try {
        const newCategory = new Category({
            category
        })

        if (!newCategory) {
            return res.status(400).json({ message: "Invalid Category Data." })
        }

        await newCategory.save()

        res.status(201).json({ message: "Category created Successfully.", category: newCategory })
    } catch (e) {
        console.log("Error in createCategories controller.", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

// Handling update Category
export const updateCategory = async (req, res) => {
    const categoryId = req.params.id
    const { category } = req.body

    try {
        if (!Types.ObjectId.isValid(categoryId)) {
            return res.status(400).json({ message: "Invalid Category Id." })
        }

        const existingCategory = await Category.findById(categoryId)

        if (!existingCategory) {
            return res.status(400).json({ message: "Category not Found." })
        }

        const updatedCategory = await Category.findByIdAndUpdate(categoryId, {
            category
        })

        return res.status(200).json({ message: "Category updated Successfully." })

    } catch (e) {
        console.log("Error in updateCategory controllers.")
        res.status(500).json({ message: "Internal server Error." })
    }
}

// Handling Delete Category
export const deleteCategory = async (req, res) => {
    const categoryId = req.params.id

    try {
        if (!Types.ObjectId.isValid(categoryId)) {
            return res.status(400).json({ message: "Invalid Category Id." })
        }

        await Category.findByIdAndDelete(categoryId)

        res.status(200).json({ message: "Category deleted Successfully." })

    } catch (e) {
        console.log("Error in deleteCategory controller.")
        res.status(500).json({ message: "Internal server Error." })
    }
}
