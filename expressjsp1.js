var e1=require('express')
var app=e1()
const port=3000;
app.get("/",(req,res)=>{
    res.send("Hello World")
}).listen(port)
console.log(`Server is running on ${port}`)
