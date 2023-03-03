const {User} = require('../db')

const getUser = async (req, res) => {
    const id = req.params.id
    const user = await User.findAll()
    const theUser = await user.find(u => u.id == id)
    console.log("hola");
    try {
        res.status(200).json(theUser)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = { getUser };