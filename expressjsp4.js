const express=require('express')
const app = express();
app.use(express.raw())
app.post("/",function(req,res){
    console.log("request received")
    console.log(req.body)
    res.end()
}).listen(3000)
console.log("Server is Running")