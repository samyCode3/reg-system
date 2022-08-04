const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const loggedin = async (req, res, next) => {
   if(!req.cookies.userRegistered) return next()
   try {  
   const decode = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET)
    db.query('SELECT * FROM users WHERE id = ?', [decode.id], async (err, result) => {
        if(err) throw err
        req.user = result[0]
        if(req.user) return res.json({ status: "loggedin", user: req.user})
        
        return next();
       
    })
   } catch (error) {
      if(error) throw error
   }
}
module.exports = loggedin