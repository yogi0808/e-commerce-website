// Files
import Message from "../models/messageModel.js"

// Getting All Messages From DB
export const getAllMessages = async (req, res) => {
    try {

        const messages = await Message.find({})

        if (!messages || messages.length <= 0) {
            return res.status(404).json({ message: "No Messages found." })
        }

        res.status(200).json(messages)

    } catch (e) {
        console.log("Error in getAllMessages controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

// Handling Send Message
export const sendMessage = async (req, res) => {
    const { fullName, email, message } = req.body

    if (!fullName || !email || !message) {
        return res.status(400).json({ message: "Provide required Inputs." })
    }

    try {
        const newMessage = new Message({
            fullName, email, message
        })

        await newMessage.save()

        res.status(201).json({ message: "Message Send successfully." })

    } catch (e) {
        console.log("Error in sendMessage controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}