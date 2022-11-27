const endpoint = 'https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json'

cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))

function findMatches(placeToMatch, cities) {
    return cities.filter(
        place => {
            const regex = new RegExp(placeToMatch, 'gi');
            return place.name.match(regex) || place.state.match(regex)
        }
    )
}



function displayItems(){
    const matches = findMatches(this.value, cities);
    const html = matches.map(
        place => {
            const regex = new RegExp(this.value ,'gi');
            const name = place.name.replace(regex, `<span class='hl'>${this.value}</span>`)
            const state = place.name.replace(regex, `<span class='hl'>${this.value}</span>`)
            return `
            <li>
            <span>${place.id}</span>
            <span>${name} </span>
            <span>${state}</span>
            </li>
            `
        }
    ).join('  ');
    list.innerHTML = html;
}

const input = document.getElementById('find');
const list = document.getElementById('list');


input.addEventListener('change' , displayItems)
input.addEventListener('keyup' , displayItems)