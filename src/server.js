function pageLanding(req, res) {
    return res.render("index.html")
}

function pageLogin(req, res) {
    return res.render("login.html")
}

function pageLayout(req, res) {
    return res.render("layout.html")
}

const express = require('express')
const server = express()
const path = require("path")

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
.use(express.static(path.resolve("public")))
//App routes
.get("/", pageLanding)
.get("/login", pageLogin)
.get("/layout", pageLayout)
.listen(5000)

