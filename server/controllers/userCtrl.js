const Users = require('../models/Users.js')
const firebase = require('../firebase/config')

const signUp = (req, res) => {
    res.send('Signed Up')
}

const login = (req,res) => {
    res.send('Logged In')
}

module.exports = {
    signUp,
    login,
}