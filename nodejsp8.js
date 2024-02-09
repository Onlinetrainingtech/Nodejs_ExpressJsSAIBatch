const fs=require('fs')
const filepath='sample1.txt'
fs.readFile(filepath,{encoding:'utf8'},function (err,data) {
    if(err){
         return console.log(`Error:${err}`);
     }else{
         console.log("Data from the File",data);
     }
    });