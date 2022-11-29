const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e){

    width = hero.offsetWidth;
    height = hero.offsetHeight;

    let {offsetX : x , offsetY : y} = e;
    if(this !== e.target){
        x = x+ e.target.offsetLeft;
        y = y+ e.target.offsetTop;
    }

    const xWalk = Math.round((x/ width * walk ) - (walk /2))
    const yWalk = Math.round((y/ height * walk ) - (walk /2))

    console.log(xWalk, yWalk)

    text.style.textShadow = `${xWalk}px ${yWalk}px 5px rgb(225, 183, 99)`;

}

hero.addEventListener('mousemove', shadow)