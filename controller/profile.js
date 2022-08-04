const db = require("../routes/db-config")
const multer = require("multer")

 const changeProfile = (req, res) => 
 {
  const filenames = req.files
const file_names = filenames.map(file => file.filename)
const file_size = filenames.map(file => file.size)
if(!req.files) return res.json({ status : "error", error: "Choose a file for upload"});
if(file_size.length > 1000000) return res.json({ status : "error", error: "File is too big"});
db.query('UPDATE users SET photo = ? WHERE userId = ? ', [file_names, req.params.userId], (err, result) => {
   if(err) throw err
   return res.json({ status: `success`, success: `Profile picture is changed`, profile : `${file_names}`})
})
    
 
 }
 module.exports = changeProfile