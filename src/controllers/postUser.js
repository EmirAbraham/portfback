const {User} = require('../db')

const postUser = async (req, res) => {
    const {
        firstName, 
        lastName, 
        birthdate, 
        image, 
        hardSkills, 
        softSkills, 
        languages, 
        projects
    } = req.body;
    try {
        const newUser = await User.create({
            firstName, 
            lastName, 
            birthdate, 
            image, 
            hardSkills, 
            softSkills, 
            languages, 
            projects
        })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = { postUser };