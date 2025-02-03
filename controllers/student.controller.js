const { v4: uuidv4 } = require('uuid')
const Student = require('../models/student.model')

//create
const createStudent = async (req, res) => {
    try {
        const newStudents = req.body
        newStudents.map((students) => {
            students.id = uuidv4()
        })
        const savedStudents = await Student.insertMany(newStudents)
        res.status(201).json(savedStudents)
    } catch (error) {
        res.status(500).json(error)
    }
}
//read
const getStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json(students)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//read by id
const getStudent = async (req, res) => {
    try {
        const foundedStudent = await Student.find({ id: req.params.id })
        res.status(200).json(foundedStudent)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
//update
const updateStudent = async (req, res) => {
    try {
        //finding documents by id
        const findStudent = await Student.findOne({ id: req.params.id })

        //update
        findStudent.name = req.body.name
        findStudent.age = Number(req.body.age)
        findStudent.dept = req.body.dept
        findStudent.institute = req.body.institute
        //save
        await findStudent.save()

        res.status(200).json(findStudent)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//delete
const deleteStudent = async (req, res) => {
    try {
        await Student.deleteOne({id: req.params.id})
        res.status(200).json({
            message: 'user is deleted'
        })
    } catch (error) {
        res.status(500).sedn(error.message)        
    }
}

module.exports = { createStudent, getStudents, getStudent, updateStudent, deleteStudent }