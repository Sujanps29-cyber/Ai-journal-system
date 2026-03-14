const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const journalRoutes = require("./routes/journal1")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use("/api/journal", journalRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000")
})