const express = require("express")
const {
	createLand,
	getLands,
	updateLand,
	deleteLand,
} = require("../controllers/landController")
const chechToken = require("../utils/checkToken")

const landRouter = express.Router()

landRouter.get("/", getLands)
landRouter.post("/", chechToken, createLand)
landRouter.patch("/:id", chechToken, updateLand)
landRouter.delete("/:id", chechToken, deleteLand)

module.exports = landRouter
