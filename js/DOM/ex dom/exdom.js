

let titreh11 = document.getElementById('titrePrincipal').id = 'nouveauTitre';

let titreh1 = document.getElementById('nouveauTitre');

titreh1.setAttribute('style', 'color: blue');

titreh1.textContent = "Bienvenue Jeremy !";

let lis = document.querySelectorAll(".li");


console.log(lis); 

lis.forEach(li=>{
    li.style.color='green'; 
    li.style.border = "solid rgb(0, 0, 0)"; 
   
})

let image = document.getElementById('logo');
let imgsrc = image.getAttribute("src");
console.log(imgsrc);
let imgsalt = image.getAttribute("alt");
console.log(imgsalt);

let pet = document.createElement('p');

pet.textContent ='Texte ajouté en JavaScript';

document.getElementById('zoneAjout').appendChild(pet);

let leesin = document.createElement('li');

leesin.setAttribute('class','li');
leesin.textContent ='Blog';
document.querySelector('nav > ul').appendChild(leesin);
console.log(leesin);

let prompteur = prompt("Combien de plantes avez vous ?");
 
let p = document.createElement('p');
 
if (prompteur == 0) {
    p.textContent = "plante : aucune !";
} else if (prompteur > 0 && prompteur < 4) {
    p.textContent = 'Tu en as quelques-unes, cool !';
} else {
    p.textContent =  'Une vraie jungle chez toi !' ;
}
 
document.body.appendChild(p);



