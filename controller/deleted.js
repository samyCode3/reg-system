const db = require("../routes/db-config");
const deleted = (req, res) =>
{
    db.query('DELETE FROM users WHERE userId = ?', [req.params.userId], async (err, result) => {
        if(err) throw err
        return res.json({ status : "success", success: "deleted", delete: `${req.params.userId}`})
        
    })
}
module.exports = deleted