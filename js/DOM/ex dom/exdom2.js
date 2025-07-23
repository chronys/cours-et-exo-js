let parag = document.querySelector("#cible");
console.log(parag);

parag.parentElement.style.background='grey';

parag.nextElementSibling.style.fontStyle='italic';

let cont = document.querySelector("#contenu");
console.log(cont);

cont.textContent = "<strong>Bonjour</strong> !"
cont.innerHTML = "<strong>Bonjour</strong> !"

let carte = document.querySelector("#carte");
console.log(carte);

let clone = document.querySelector("#carte").cloneNode(true);

document.body.appendChild(clone);

let qarte = document.createElement('div');

qarte.setAttribute("class","carte");

console.log(qarte);

let h2 = document.createElement('h2');
let img = document.createElement('img');

img.setAttribute('src','');
img.setAttribute('alt','C\est vide');



