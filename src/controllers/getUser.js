
const getUser = async (req, res) => {
    
    try {
        const user = {
            name: "Emir",
            lastName: "Abraham",
            age: 28,
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = { getUser };