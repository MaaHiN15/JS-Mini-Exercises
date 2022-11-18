const setSecond = document.querySelector('.sec');
const setMinute = document.querySelector('.min');
const setHour = document.querySelector('.hour');
const number = document.querySelectorAll('.number');

setSecond.style.background = 'white';
setMinute.style.width = '40%';
setMinute.style.marginLeft = '10%';
setHour.style.width = '30%';
setHour.style.marginLeft = '20%';
setMinute.style.background = 'orange';

function timing(){
    const Time = new Date();
    // seconds
    s = Time.getSeconds();
    seconds = ((s/60)*360)+90;
    setSecond.style.transform = `rotate(${seconds}deg)`;
    // minutes
    m = Time.getMinutes();
    minutes = (m/60)*360+90;
    setMinute.style.transform = `rotate(${minutes}deg)`;
    // hour
    h = Time.getHours();
    hours = ((h/12)*360)+90;
    setHour.style.transform = `rotate(${hours}deg)`;
    // output
    console.log(`${h} : ${m} : ${s}`)

    if ( s == 15 || s == 30 || s == 45 || s == 0) {
        number.classList.add("after");
    }
    else{
        number.classList.remove('after');
    }
}

setInterval( timing, 1000);

