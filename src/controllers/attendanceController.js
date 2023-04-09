import Attendance from '../models/attendanceModel'

import mongoose from "mongoose"

// get all attendance
const getAttendance = async (req, res) => {
    const attendance = await Attendance.find({}).sort({ createdAt: -1 })

    res.status(200).json(attendance)
}

// get a single attendance
const getSingleAttendance = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such data"})

    }

    const attendance = await Attendance.findOne({_id: id})

    if (!attendance) {
        return res.status(404).json({error: "No such data"})
    }

    res.status(200).json(attendance)
}

// create a new attendance
const createAttendance = async (req, res) => {
    const { name, position } = req.body

    //add to database
    try {
        const attendance = await Attendance.create({ name, position })
        res.status(200).json(attendance)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete attendance
const deleteAttendance = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such data"})
    }

    const attendance = await Attendance.findOneAndDelete({_id: id})

    if (!attendance) {
        return res.status(404).json({error: "No such data"})
    }
    res.status(200).json(attendance)
}

// update attendance
const updateAttendance = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such data"})
    }

    const attendance =  await Attendance.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!attendance) {
        return res.status(404).json({error: "No such data"})
    }
    res.status(200).json(attendance)

}

module.exports = {
    getAttendance,
    getSingleAttendance,
    createAttendance,
    deleteAttendance,
    updateAttendance
}