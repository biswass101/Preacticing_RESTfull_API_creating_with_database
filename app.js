const express = require("express")
const cors = require('cors')
require('./config/db')
const userRouter =  require('./routes/user.route')
const studentRouter = require('./routes/student.router')
const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/students', studentRouter)

//api models overview

/*
    1. api/users : GET
    2. api/users/:id: GET
    3. api/users/ : POST
    4. api/users/:id : PATCH
    5. api/users/:id : DELETE
*/

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/./views/index.html')
})


//error handling for invalid route
app.use((req, res, next) => {
    res.status(404).json({
        message: 'route not found'
    })
})


//for server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'something broke'
    })
})

module.exports = app