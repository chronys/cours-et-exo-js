// getElementById va retourner l'element demandé grâce à son ID
// let first = document.getElementByID('li1');

// querySelector() va retourner l'élément demandé grace aux selecteur CSS (ATTENTION !! il retourne 1 seul élément)

let first = document.querySelector("#first");
console.log(first);

// querySelectorAll() va retourner TOUS les éléments demandés sous forme de "noeud"
// (tableau) MEME s'il n'y à qu'un seul élément

let lis = document.querySelectorAll("nav > ul > li");

console.log(lis);

// FOREACH : boucle qui va nous permettre de boucler sur les tableaux
let text = "";
lis.forEach((li) => {
  let text = li.textContent;
  console.log(text);
});

// Changer les attributs

let image = document.querySelector("img");

console.log(image);

let srcImage = image.getAttribute("src");

console.log(srcImage);

image.setAttribute(
  "src",
  "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
);

console.log(image);

// je récupère MES images

let images = document.querySelectorAll("img");

images.forEach((image) => {
    if(image.getAttribute('alt') == 'Chat'){
        image.style.width = "50%";
    } else if (image.getAttribute('alt') == 'chien'){
        image.style.width = "25%";
        image.style.boxShadow = "10px 10px 10px black";
    } else {
        image.style.height = "50px";
    }
})

// créer un élément HTML
//createElement('nom de la balise');

let titreH3 = document.createElement('h3');

// textContent = recupère ou défini le texte dans l'élément

titreH3.textContent = "je suis un texte content !";
titreH3.setAttribute('id','supprime-moi');

// Je rends titreH3 enfant de body
document.body.appendChild(titreH3);

let h3supp = document.querySelector('#supprime-moi');// |
h3supp.remove(); // OU titreh3.remove()                <-

// Exemple prompt()
let prompteur = prompt("Etes vous heureux dans la vie (Oui/Non)");

let imageReponse = document.createElement('img');
let text2;

if (prompteur == "oui" || prompteur == 'Oui'){
    imageReponse.setAttribute('src','https://media.tenor.com/gDfUt8Kry48AAAAe/yay-minions.png');
    text2 = "Ok cool";
} else if (prompteur == "Non" || prompteur == "non") {
    imageReponse.setAttribute('src','https://i.redd.it/16z06673ct1e1.jpeg');
    text2 = ":'(";
} else {
    imageReponse.setAttribute('src','https://media.istockphoto.com/id/475710000/fr/photo/frustr%C3%A9-de-jeune-enfant-grognon-avec-bras-crois%C3%A9s-et-sale-look.jpg?s=612x612&w=0&k=20&c=fh-ZFl7Cx6imuJiwwSF-u-cNfp8THI3eP4WScNz_fqM=');
text2 = "c'est oui ou non tu forces un peu la non? >:("
}

document.body.appendChild(imageReponse);
document.body.append(text2);