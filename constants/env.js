const dotenv = require("dotenv")
dotenv.config()

exports.MONGO_URI = process.env.MONGO_URI
exports.MODE = process.env.MODE
exports.PORT = process.env.PORT
exports.JWT_SECRET = process.env.JWT_SECRET
exports.ADMIN_ID = process.env.ADMIN
