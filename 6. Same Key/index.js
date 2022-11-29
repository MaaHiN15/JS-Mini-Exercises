
pressed = [];
secret_code = 'maahi'

window.addEventListener('keydown', (e) => {
    console.log(e.key)
    pressed.push(e.key.toLowerCase());

    pressed.splice(-secret_code-1 , pressed.length - secret_code.length)
    console.log(pressed)

    if(pressed.join('') == secret_code){
        console.log('DING DING!!!')
    }
})
