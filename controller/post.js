const db = require("../routes/db-config")
const {v4: uuidV4} = require("uuid")

const  postProduct = (req, res) => {
    const {product} = req.body
    const {price} = req.body
    const {quality} = req.body
    const {shipping} = req.body
    const {tax} = req.body
    const {describtion} = req.body
    if(!product || !price || !quality || !shipping || !tax) return res.json({ status : "error" , error: " asteric (*) field are required to be filled"});
    if(!/^[a-zA-Z0-9]*$/.test(product))return res.json({ status : "error", error: "Invaild product name Entered"})
    // if(typeof price !== 'number' || typeof quality !== 'number' || typeof shipping !== 'number' || typeof tax !== 'number') return res.json({ status : "error", error: "Price, shipping, tax, quality are required to be a number"})
    db.query('INSERT INTO posts SET ?', {
        postId : uuidV4(),
        product : product,
        price : price,
        quality: quality,
        shipping: shipping,
        tax : tax,
        description : describtion
        }, async (err, result) => {
            if(err) throw err
            return res.json({ status : 'ok', success : "Post is successfull"})
        })
}
module.exports = postProduct