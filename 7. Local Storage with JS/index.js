const form = document.querySelector('.submit');
const list = document.getElementById('list');
things = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('.text')).value;
    const obj = {
        text,
        done: false
    }
    things.push(obj);
    console.log(things)
    localStorage.setItem('items', JSON.stringify(things))
    joinList(things, list)
    this.reset();
}

function joinList(plates = [], plateList){
    plateList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkbox" id="plate${i}" ${plate.done ? 'checked' : '' }/>
        <lable for="plate${i}">${plate.text}</lable>
        </li>
        `
    }).join('');
}

form.addEventListener('submit', addItem)