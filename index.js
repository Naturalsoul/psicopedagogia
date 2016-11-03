const express = require("express")
const bodyParser = require("body-parser")
const pug = require("pug")

const server = express()

server.set("views", "./views")
server.set("view engine", "pug")

server.use(express.static(__dirname + "/public"))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))

server.get("/", function(req, res) {
	res.render("index", {name: "Angelo"})
})

server.listen(8080, function() {
	console.log("Listening!")
})