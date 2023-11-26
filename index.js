const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')

setInterval(setclock,1000);

function setclock(){
    const currentDate = new Date();
    const secondTick = currentDate.getSeconds() / 60;
    const minuteTick = (secondTick + currentDate.getMinutes()) / 60;
    const hourTick = (minuteTick + currentDate.getHours()) / 12;

    setTime(secondHand , secondTick);
    setTime(minuteHand , minuteTick);
    setTime(hourHand , hourTick);
}

function setTime(getHand , setHand){
    getHand.style.setProperty('--rotation', setHand * 360);
}

