import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

// Files
import ConnectToDB from "./utils/db.js";
import cartRoute from "./routes/cartRoute.js"
import orderRoute from "./routes/orderRoute.js"
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import productRoute from "./routes/productRoute.js"
import messageRoute from "./routes/messageRoute.js"
import categoriesRoute from "./routes/categoryRoute.js"


dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())

// Routers
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/cart", cartRoute)
app.use("/api/order", orderRoute)
app.use("/api/product", productRoute)
app.use("/api/message", messageRoute)
app.use("/api/categories", categoriesRoute)


const PORT = process.env.PORT
app.listen(PORT, () => {
    ConnectToDB()
    console.log(`Server is Running in ${PORT}`);
}) 