var f1=require('fs')
f1.rename('sample.txt','sample1.txt',function(err){
if(!err)
 console.log("File renamed successfully")
else 
console.log("Error in renaming the file : "+ err);
})