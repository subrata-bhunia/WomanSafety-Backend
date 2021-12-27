// const connection = require("./config/Connection");
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const userRouter = require("./api/users/user.router");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config()

app.use("/api/users", userRouter);
app.get('/' , (req , res)=>{
   res.send({
       msg:'Welcome To Woman Safety App',
       port:process.env.PORT,
       url:req.protocol + '://' + req.get('host') + req.originalUrl
    })
})
app.listen( process.env.PORT, ()=> console.log('> Server is up and running on port : ' + process.env.PORT))