function alertAfter3Seconds()
{
    console.log("Welcome Alert function")
    clearTimeout(timerId)
}
const timerId=setTimeout(alertAfter3Seconds,1000);



console.log("Timer has been Canceled");