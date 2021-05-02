const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const errorController = require("./controllers/errorController")
const mongoConnection = require("./database/mongoConnection")
const { MONGO_URI, MODE, PORT } = require("./constants/env")
const indexRouter = require("./routes")

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

mongoConnection(MONGO_URI, MODE)

app.use("/api", indexRouter)

app.use(errorController)

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))
