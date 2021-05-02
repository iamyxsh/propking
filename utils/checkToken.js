const expressAsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const { JWT_SECRET, ADMIN_ID } = require("../constants/env")
const AppError = require("./AppError")

const chechToken = expressAsyncHandler(async (req, res, next) => {
	if (!req.headers.authorization)
		throw new AppError("Unauthorized Access.", 401)

	const token = req.headers.authorization.split(" ")[1]

	if (!token) throw new AppError("Unauthorized Access.", 401)

	const decoded = await jwt.verify(token, JWT_SECRET)

	if (!decoded) throw new AppError("Unauthorized Access.", 401)

	if (decoded.id !== ADMIN_ID) throw new AppError("Unauthorized Access.", 401)

	next()
})

module.exports = chechToken
