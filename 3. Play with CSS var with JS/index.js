const eventChange = document.querySelectorAll('input');

function changeings(){
    console.log(this.value)
    const suffix = this.dataset.spacing || this.dataset.blur || '';
    console.log(suffix)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}


eventChange.forEach(e => e.addEventListener('change', changeings))
eventChange.forEach(e => e.addEventListener('mousemove', changeings))