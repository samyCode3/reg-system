const express = require("express");
const ejs = require("ejs");
const cookie = require("cookie-parser")
const db = require("./routes/db-config");
const pages = require("./routes/pages")
const controller = require("./controller/auth")
const bcrypt = require("bcryptjs");
const PORT = process.env.PORT || 5000
const app = express();

app.set("view engine", "ejs")
app.set("views", "./views");
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/webfonts',express.static('public/webfonts'));
app.use('*/images',express.static('public/images'));
app.use(cookie())
app.use(express.json())
app.use("/", pages);
app.use("/api", controller)
app.use((req, res, next) => {
   var err = new Error("Page not found");
   err.status = 404
   next(err)

})
app.use((err, req, res, next) => {
   res.status(err.status || 500 || 401 || 403)
   res.send(err.message)
})


db.connect((err) => {
   if(err) throw err 
  
})


app.listen(PORT);