require("dotenv").config()

import attendanceRoutes from './src/routes/attendanceRoutes'

import mongoose from 'mongoose'

import express from 'express'

// express app
const app = express()

// middlewares
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/attendance", attendanceRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {
        console.log("connected to db")

        //listen to port
        app.listen(process.env.PORT, () => {
            console.log("listening to port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

