import { Types } from "mongoose"

// Files
import Product from "../models/productModel.js"
import Category from "../models/categoryModel.js"

// Getting All Products from DB
export const getAllProducts = async (req, res) => {

    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const keyword = req.query.keyword
    const category = req.query.category
    const sortOrder = parseInt(req.query.sort)

    try {
        const filter = {}

        if (keyword) {
            filter.$or = [
                {
                    name: { $regex: keyword, $options: "i" }
                }, {
                    desc: { $regex: keyword, $options: "i" }
                }
            ]
        }

        if (category) {
            filter.category = category
        }

        const skip = (page - 1) * limit


        const sort = {}

        if (sortOrder) {
            sort.name = sortOrder
        }

        const products = await Product.find(filter).sort(sort).skip(skip).limit(limit)

        return res.status(200).json(products)

    } catch (e) {
        console.log("Error in getAllProducts controller.")
    }
}

// Getting Single Product by Id 
export const getSingleProduct = async (req, res) => {
    try {
        const productId = req.params.id

        if (!Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: "Invalid Product Id." })
        }

        const product = await Product.findById(productId).populate(["category"])

        if (!product) {
            return res.status(404).json({ message: "product Not Found." })
        }

        res.status(200).json(product)

    } catch (e) {
        console.log("Error in getSingleProduct controller.", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

// Creating new Product
export const createProduct = async (req, res) => {
    const { name, desc, price, discount, imgs, category } = req.body

    if (!name || !desc || !price || !imgs || !category) {
        return res.status(400).json({ message: "Provide valid Input." })
    }


    try {

        if (!Types.ObjectId.isValid(category)) {
            return res.status(400).json({ message: "Invalid Category." })
        }

        const categoryData = await Category.findById(category)

        if (!categoryData) {
            return res.status(400).json({ message: "Category Not Found." })
        }

        const existingProduct = await Product.findOne({ name, desc })

        if (existingProduct) {
            return res.status(400).json({ message: "Product already Exist." })
        }

        const newProduct = new Product({
            name, desc, price, imgs, discount, category: categoryData._id
        })

        if (!newProduct) {
            return res.status(400).json({ message: "Invalid product data." })
        }

        await newProduct.save()

        res.status(201).json({ message: "Product Created successfully.", product: newProduct })

    } catch (e) {
        console.log("Error in createProduct controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

// Handling Delete Product
export const deleteProduct = async (req, res) => {
    const productId = req.params.id

    try {

        if (!Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: "Invalid Product Id." })
        }

        const product = await Product.findById(productId)

        if (!product) {
            return res.status(404).json({ message: "Product not Found." })
        }


        await Product.findByIdAndDelete(productId)

        return res.status(200).json({ message: "Product deleted Successfully." })

    } catch (e) {
        console.log("Error in deleteProduct controller.", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

