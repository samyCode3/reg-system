const db = require("../routes/db-config")
const paypal = require("paypal-rest-sdk")

const payment_SDK = (req, res) =>
{
    // paypal.configure({
    //     'mode' : 'sandbox',
    //     'client_id' : 
    //     'AW6ShAuCC8e6Tf259QVAm9Gu3GHnjoWR7zEBifrmS3aNHBK_9ggtjZ4TbAz2IDSs3N-Pa-5N_7uACOIt',
    //     'client_secret'
    //     : 'EOvMOIIyLZIhfm-JyzQOyftMshmX67IIl_xaS6AQwBAKhvFGmw1q1GTcGKZL2VhJFjAVs197E2-2K1wC'
    // })
    // let create_payment_json = {
    //     "intent": "sale",
    //     "redirect_urls": {
    //       "cancel_url": "http://localhost:5000/success",
    //       "return_url": "http://localhost:5000/cancel"
    //     },
    //     "payer": {
    //         "payment_method": "paypal"
    //       },
    //     "transactions": [
    //         {
    //           "item-list" : [
    //             {
    //                 "items" : [
    //                     {
    //                         "name" : "items",
    //                         "sku" : "item",
    //                         "price" : "1.00",
    //                         "currency" : "USD",
    //                         "quality" : 1
    //                     }
    //                 ]
    //             }
    //           ]
    //         }
    //     ],
    //     "amount": {
    //         "currency": "USD",
    //         "amount": "10"
    //       }
    //   };
    //   paypal.payment.create(create_payment_json, (err, payment) => {
    //     if(err) throw err
    //     res.json({ status : `${payment}`})
    //   })
}
module.exports = payment_SDK