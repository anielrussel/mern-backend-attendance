import mongoose from "mongoose"

const Schema = mongoose.Schema

const attendanceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Attendance", attendanceSchema)