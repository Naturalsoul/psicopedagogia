const express = require("express")
const bodyParser = require("body-parser")
const pug = require("pug")

const server = express()

server.use(express.static("public"))
server.use(bodyParser.json())
server.use(urlenconded({extended: false}))

server.get("/", function(req, res) {
	res.render("<h1>Hello!</h1>")
})

server.listen(8080, function() {
	console.log("Listening!")
})