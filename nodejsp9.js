var fs=require('fs')
console.log('get the file information')
fs.stat('sample1.txt',function(err,stat){
    if(err)throw err;
    console.log('FileName::',stat.isFile()? 'file' : 'directory', stat.size,'byte', stat.mtime); // mtime: modified time 수정시간
    console.log(`The size of sample1.txt is ${stat.size}`);
    console.log(`Is the file ${stat.isFile()?'':'not'} a file`);
})