const expressAsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../constants/env")

const Admin = require("../database/Admin")
const AppError = require("../utils/AppError")

const signin = expressAsyncHandler(async (req, res) => {
	const { email, password } = req.body

	const admin = await Admin.findOne({ email })

	if (!admin || password !== admin.password)
		throw new AppError("Wrong Credentials.", 401)

	const token = await jwt.sign({ id: admin.id }, JWT_SECRET, {
		expiresIn: "1d",
	})

	res.json({ token })
})

module.exports = { signin }
