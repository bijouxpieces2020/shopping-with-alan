 const express = require ("express")
 const app = express()

require("dotenv").config()
require("./config/database")
app.use(express.json())

 app.get("/",(req,res)=>{
res.send("I have nothing yet")
 })

 app.listen (3001,()=>{
     console.log("listening to port 3001")
 })