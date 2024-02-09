var fs=require('fs')
fs.open('sample.txt','w',function(err,fd){
    if(err) throw err;
    let dataToWrite="Helloworld"
    fs.write(fd,dataToWrite,function(err){
        if(!err)
        {
            console.log(dataToWrite+' has been written');
        }
        else
        {
            console.err("Error in writing",err);
        }
    })
});