const mongoose = require("mongoose")

const landSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		area: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Land = mongoose.model("Land", landSchema)

module.exports = Land
