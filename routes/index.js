const express = require("express")
const authRouter = require("./authRouter")
const landRouter = require("./landRouter")

const indexRouter = express.Router()

indexRouter.use("/admin", authRouter)
indexRouter.use("/land", landRouter)

module.exports = indexRouter
