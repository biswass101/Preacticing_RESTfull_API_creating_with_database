const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

const studentSchema = mogoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model("Student", studentSchema)