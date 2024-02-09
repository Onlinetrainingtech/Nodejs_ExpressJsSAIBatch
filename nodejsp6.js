const fs=require("fs")
const buffer=new Buffer.alloc(1024);
console.log("open exisiting file")
fs.open('sample.txt','r',function(err,fd){//Call backfunction
    if(err)
    {
        console.err(err)
    }
    console.log('Reading the data')
    fs.read(fd,buffer,0,buffer.length,0,function(err,byte){
        if(err)
        {
            console.log(err)
        }
        if(byte>=0)
        {
            console.log("Data read successfully");
        }
    })
})