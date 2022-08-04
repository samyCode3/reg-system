const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")
const { v4: uuidV4 } = require("uuid");
// const { json } = require("body-parser");


const register = async (req, res) => {
    const { fullname } = req.body
    const { username } = req.body
    const { email } = req.body
    const { number } = req.body
    const { date } = req.body
    const { password } = req.body;
    const { confirmation } = req.body;
    const newDate = new Date(date).getTime();
 

    

    if (!fullname) return res.json({ status: "error", error: "Fullname is required" });
    if(!/^[a-zA-Z ]*$/.test(fullname))return res.json({ status : "error", error: "invaild name entered"})
    if (!username) return res.json({ status: "error", error: "Username is required" });
    if(!/^[a-zA-Z0-9]*$/.test(username))return res.json({ status : "error", error: "invaild username entered"})
    if(username.length > 8) return res.json({ status : "error", error : "Username should not be more than 8  characters"})
    if (!email) return res.json({ status: "error", error: "Email is required" })
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))return res.json({ status : "error", error: "invaild email entered"})
    if(!number) return res.json({ status: "error", error: "Number is required" })
    if(number.length < 11 || number.length > 11) return res.json({ status: "error", error: "Phone number not valid"})
    if(!newDate) return res.json({ status: "error", error: "invaild date of birth entered"})
    if (!password) return res.json({ status: "error", error: "Password is required" })
    if(/^[a-zA-Z0-9]*$/.test(password))return res.json({ status : "error", error: "Choose a stronger password"})
    if (password.length < 8) return res.json({ status: "error", error: "Password should more than eight characters" })
    if (password !== confirmation) return res.json({ status: "error", error: "Failed to confirm password" })
    else {
        db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
            if (err) throw err
            if (result[0]) return res.json({ status: "error", error: "Email is already taken" })
        db.query('SELECT phone FROM users WHERE phone = ?', [number], async(err, resulting) => {
            if(err) throw err
            if (resulting[0]) return res.json({ status: "error", error: "Phone number is already taken" })
            else {
               
                
                const passwordHash = await bcrypt.hash(password, 8);
                db.query('INSERT INTO users SET  ?', {
                    userId: uuidV4(), fullname: fullname, username: username, email: email, phone:number, date:date, password: passwordHash,
                    confirmation: passwordHash
                }, (err, results) => {
                    if (err) throw err;
                    return res.json({ status: "success", success: "Registration was successfull"})
                
                    
                })


            }
        })
           

        })

    }

}
module.exports = register;
