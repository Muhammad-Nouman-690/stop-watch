// built-In Function
// setInterval()
// setTimeout

// function timer(){
//     console.log("running")

// }

// setInterval(timer,1000)

// var count = 0;
// var interval;

// function timer(){
//     count++
//     console.log(count)

// }

// interval = setInterval(timer, 1000)

// setTimeout(function(){
//     clearInterval(interval)
// },6000)

var min = 0;
var sec = 0;
var msec = 0;

var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var msecHead = document.getElementById("msec");

var interval;

function timer(){
    msec++
    msecHead.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHead.innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++
        minHead.innerHTML = min;
        sec = 0;
    }
}

function start(){

    interval = setInterval(timer,10)
    startbutton.disabled = true

}

function stop(){
    clearInterval(interval)
    startbutton.disabled = false
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHead.innerHTML = min
    secHead.innerHTML = sec
    msecHead.innerHTML = msec
    stop()
}