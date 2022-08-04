const db = require("../routes/db-config")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const login = async (req, res) => {
    const { email } = req.body
    const { password } = req.body

    if(!email || !password) return res.json({status : "error", error: "Invalid login detail"})
  
            db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
               if(err) throw err
               if(!results[0] || !await bcrypt.compare(password, results[0].password)) return res.json({status : "error", error : "Email or password is incorrect"})
              else 
              {
               const token = jwt.sign( {id: results[0].id }, process.env.JWT_SECRET, {
                   expiresIn: process.env.JWT_EXPIRES,
                   
               })
               const cookieOption = 
               {
                   expiresIn : new Date(Date.now() + process.env.COOKIES_EXPIRES * 24 * 60 * 60 * 1000),
                   httpOnly: true
               }
               res.cookie("userRegistered", token, cookieOption)
               return res.json({status : "success", success : "You are logged in", usersId : `${results[0].userId}`})
              }
           })
              
           }


module.exports = login;