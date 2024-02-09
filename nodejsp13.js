for(i=0;i<=5;i++)
{
    setTimeout(()=>{
        console.log(i)
    },i*10000)
    console.log("I value is::"+i)
}
console.log('Printed Immediately')