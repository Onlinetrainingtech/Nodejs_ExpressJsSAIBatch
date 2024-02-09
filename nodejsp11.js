let count=0
const intervalId=setInterval(()=>{
    if(count===10){
        clearInterval(intervalId)
        console.log('10 seconds passed')
        }else{
             console.log(`${count} second passed`)
              count++
               }}, 1000)


