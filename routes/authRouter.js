const express = require("express")
const { signin } = require("../controllers/authController")

const authRouter = express.Router()

authRouter.post("/signin", signin)

module.exports = authRouter
