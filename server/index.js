// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.

const express = require('express');
const app = express();
app.use(express.static('public'));
const bodyParser = require("body-parser");
require('dotenv').config()
const cors = require("cors");
const stripe=require('stripe')(`${process.env.STRIPE_KEY}`)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const mongoose = require('mongoose')

const YOUR_DOMAIN = 'http://localhost:4242';
const mongoUri = process.env.MONGO_URI


app.post("/create-checkout-session", async (req, res) => {
  
    const storeItems = Object.entries(req.body) 
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: Object.entries(req.body).map((data) => {
           console.log(data[0], data[1].count)
            return {
              price_data: {
                currency: "usd",
                product_data: {
                  name: data[0],
                },
                unit_amount: 500,
              },
              quantity: data[1].count,
            }
          }),
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:4242/cancel.html`,
      })
      res.json({ url: session.url })
    } catch (e) {
        console.log(`${process.env.SERVER_URL}`)
      res.status(500).json({ error: e.message })
    } 
  })
mongoose.connect(mongoUri,{useNewUrlParser:true})
const connection = mongoose.connection;
connection.once('open', (open)=>{console.log('Connection establised successfully')})
const User = require('./models/user.models') 

app.post('/register', async (req,res)=>{
    console.log(req.body, User)
    try{
        const user = await User.create({
            name: req.body.firstName+''+req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'ok', message:"Registered Successfully"})
    }catch(err){
        console.log(err)
        res.json({ status:'error', error:err, message:'Invalid Email or password'})
    }
})
app.post('/login', async (req,res)=>{
  const user = await User.findOne({
  email: req.body.email,
})
console.log(user)

  if (!user) {
        console.log('coming here')
    return { status: 'error', error: 'Invalid login' }
  }
  return { status: 'OK', error: 'LoggedIn successfully' }
})
app.listen(4242, () => console.log('Running on port 4242'));