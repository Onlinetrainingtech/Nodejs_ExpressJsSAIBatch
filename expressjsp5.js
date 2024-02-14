const express=require('express')
const app=express()
const PORT=3000
//Single Routing
const router=express.Router();
router.get('/',(req,res)=>{
    res.send("Hello World")
    console.log("Routing Working")
})
app.use(router)

app.listen(PORT,function(err){
    if(!err)console.log(err);
    console.log("Server listen")
})