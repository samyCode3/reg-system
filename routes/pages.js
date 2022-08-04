const express = require("express");
const router = express.Router();
const logout = require("../controller/logout")


router.get("/", (req, res) => {
    res.render("index")
})
router.get("/home",(req, res) => {
    res.sendFile("home.html", { root : "./public/"})
})
router.get("/register", (req, res) => {
    res.sendFile("register.html", { root : "./public/"})
})
router.get("/login", (req, res) => {
    res.sendFile("login.html", { root : "./public/"})
})
router.get("/verification", (req, res) => {
    res.sendFile("verification.html", { root : "./public/"})
})
router.get("/post", (req, res) => {
    res.sendFile("post.html", { root : "./public/"})
})
router.get("/profile", (req, res) => {
    res.sendFile("profile.html", { root : "./public/"})
})
router.get("/delete", (req, res) => {
    res.sendFile("delete.html", { root : "./public/"})
})

router.get("/logout", logout)
module.exports = router