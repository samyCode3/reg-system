const db = require("../routes/db-config")

const updated = (req, res, next) => {
    const {fullname} = req.body
    const {username} = req.body 
    
    if(!fullname || !username) return res.json({ status : "error", error : "All field is needed for update"})
    if(!/^[a-zA-Z ]*$/.test(fullname) || !/^[a-zA-Z ]*$/.test(username))return res.json({ status : "error", error: "invaild name entered"})
    db.query('UPDATE users SET fullname = ?, username = ?',[fullname, username, req.params.userId], async (err, result) => {
        if(err) throw err
        return res.json({ status : "success", success : "Updated"})
    })
    

}

module.exports = updated