const anniversaire = "29 oct 2024";

function countdown(){
    const anniversaryDate= new Date(anniversaire)
    const curentDate = new Date()
    const timeLeft = anniversaryDate-curentDate
    var timeList = []
    var secondLeft=Math.floor(timeLeft/1000)
    var minuteLeft=Math.floor(secondLeft/60)
    var houreLeft=Math.floor(minuteLeft/60)
    var dayLeft=Math.floor(houreLeft/24)
    var houreLeft=houreLeft%24
    var minuteLeft=minuteLeft%60
    var secondLeft=secondLeft%60

    document.querySelector(".js-day-count").innerHTML=dayLeft
    document.querySelector(".js-houre-count").innerHTML=houreLeft
    document.querySelector(".js-minute-count").innerHTML=minuteLeft
    document.querySelector(".js-second-count").innerHTML=secondLeft
    console.log(timeLeft)
    console.log(dayLeft, houreLeft, minuteLeft,secondLeft)
    console.log(minuteLeft)
    console.log(houreLeft)
    console.log(dayLeft)
}

countdown()
setInterval(countdown, 1000)