const expressAsyncHandler = require("express-async-handler")
const Land = require("../database/Land")

const createLand = expressAsyncHandler(async (req, res) => {
	const { name, area, city, state, country } = req.body

	await Land.create({ name, area, city, state, country })

	res.json({ msg: "Land successfully created." })
})

const getLands = expressAsyncHandler(async (req, res) => {
	const lands = await Land.find()

	res.json(lands)
})

const updateLand = expressAsyncHandler(async (req, res) => {
	const { id } = req.params
	const { name } = req.body

	const land = await Land.findById(id)
	if (land.name === name) {
		res.json({ msg: "Updated successfully." })
	}

	await Land.findOneAndUpdate(id, { name })
})

const deleteLand = expressAsyncHandler(async (req, res) => {
	const { id } = req.params

	await Land.findByIdAndDelete(id)

	res.json({ msg: "Deleted successfully." })
})

module.exports = { createLand, getLands, updateLand, deleteLand }
