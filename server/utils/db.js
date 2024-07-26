import mongoose from "mongoose"

// Connecting To DataBase
const ConnectToDB = async () => {
    const URI = process.env.DB_URI

    try {
        await mongoose.connect(URI)

        console.log("Database connected Successfully.")
    } catch (e) {
        console.log(`Error in Connecting to database: ${e.message}`)
        process.exit(0)
    }

}

export default ConnectToDB