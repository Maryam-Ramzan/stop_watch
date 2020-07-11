var min = 0;
var sec =0;
var msec = 0;
var minget = document.getElementById("min")
var secget = document.getElementById("sec");
var getms = document.getElementById("msec");

function timer()
{
    msec++
    getms.innerHTML= msec;
    
    if(msec>=100)
    {
        sec++
        secget.innerHTML= sec;
        msec =0;

    }else if(sec>=60)
    {
        min++
        minget.innerHTML = min;
        sec=0;
    }
}


var interval = 0;
function start(){
interval = setInterval(timer,10)
document.getElementById("btn.id").disabled = true;    

}

function stop()
{
    clearInterval(interval);
}

function Reset()
{
    min =0;
    sec=0;
    msec =0;
    minget.innerHTML = min;
    secget.innerHTML = sec;
    getms.innerHTML = msec;
    stop();
    document.getElementById("btn.id").disabled = false;    
    
}