const { MODE } = require("../constants/env")

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500

	const stack = MODE === "DEVELOPMENT" ? err.stack : null

	return res
		.status(err.statusCode)
		.json({ status: "fail", payload: err.message, stack })
}
