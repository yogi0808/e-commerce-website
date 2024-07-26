
// Checking user is Admin Or not
export const validateAdmin = async (req, res, next) => {
    try {
        const user = req.user

        if (user.isAdmin) {
            return next()
        }

        res.status(404).json({ message: "Unauthorized - Not an Admin." })

    } catch (e) {
        console.log("Error in validateAdmin middleware.", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}