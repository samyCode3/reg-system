const express = require("express");
const register = require("./register");
const login = require("./login");
const loggedin = require("./loggedin");
const updated = require("./update")
const deleted = require("./deleted")
const postProduct = require("./post")
const paypalAcc = require("./paypalAcc")
const stats = require("./profile");
const router = express.Router();
const multer  = require('multer')
const path = require('path')
const fs = require("fs")
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './upload')    
    },
    filename: (req, files, callBack) => {
        callBack(null, files.fieldname + '-' + Date.now() + path.extname(files.originalname))
    },
})

var upload = multer({
    storage: storage,
    
});

router.post("/register", register);
router.post("/login", login)
router.get("/loggedin", loggedin)
router.post('/post',postProduct)
router.post("/paypalAcc", paypalAcc)
router.delete('/deleted/:userId', deleted)
router.post("/update/:userId", updated)
router.post('/stats/:userId', upload.array('uploaded_file', 4), stats)


module.exports = router;
