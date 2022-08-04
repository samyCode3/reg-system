const logout = (req, res) => {
   res.clearCookie("userRegistered")
   res.redirect("/login")
   return res.json({status : "ok", ok : "logout"})
}

module.exports = logout