require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Running express server on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('I am here').json({message: error.message})
})