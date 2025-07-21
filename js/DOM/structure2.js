// LE DOM
 
// Récupérer par les ID
 
let h1 = document.getElementById('test');
 
 
// getElementById; getElementsByClassName; getElementByTagName
 
// querySelector se sert des selecteurs CSS
let patate = document.querySelector('#patate');
console.log(patate);
 
 
// querySelectorAll() récupère PLUSIEURS Elements et retourne un tableau (même s'il n'ya qu'un seul résultat)
let lis = document.querySelectorAll('.li');
//lis = document.getElementsByClassName('li');
console.log(lis);
 
// getAttribute récupère l'attribut (attribut dans une balise HTML exemple : id, class, src, href, charsets etc etc);
 
let attribut1 = h1.getAttribute('id');
console.log(attribut1); // Affichera 'test';
 
 
// setAttribute change ou créé un attribut d'une balise HTML
h1.setAttribute('id', 'test2');
 
// Création attribut style
h1.setAttribute('style', 'color: red');
 
console.log(h1);
 
// Modification CSS :
 
// la propriété style nous servira à acceder à toutes les propriétés disponibles en CSS
h1.style.fontSize = '30px'; // ici on met le h1 à 30px de font-size
 
// Manipulation du DOM :
// Creation balise
let li6 = document.createElement('li');
console.log(li6);
 
// On ajoute la classe li
li6.setAttribute('class', 'li');
console.log(li6);
 
// J'ajoute le texte '6' à l'interieur
li6.textContent = '6';
console.log(li6);
 
// appendchild() ou append() :
let ul = document.querySelector('nav > ul');
// document.querySelector('nav > ul').appendChild(li6);
console.log(ul);
 
ul.appendChild(li6);
 
// Remove
 
li6.remove();
 
// forEach():
// Structure
// (li) représent chaque element individuellement
lis.forEach((li) => {
    li.style.color = "purple";
})
 
 
// prompteur :
 
// let prompteur = prompt("Combien de chats avez vous ?");
 
// let p = document.createElement('p');
 
// if (prompteur == 0) {
//     p.textContent = "Quel dommage, vous ne savez pas ce que vous loupez !";
// } else if (prompteur > 0 && prompteur < 4) {
//     p.textContent = "C'est le nombre parfait !";
// } else {
//     p.textContent = "C'est beaucoup trop !";
// }
 
// document.body.appendChild(p);
 
 
// document.body.querySelector("section").appendChild(p);
 
// let section = document.getElementById('ajoutSection');
 
// section.appendChild(p);
 
 
// DOM un peu plus approfondi
 
// Naviguer dans le DOM
// Le DOM forme un arbre d'éléments liés entre eux : Parent, enfants, frères, etc...
 
// "parentElement" : Recupère l'élément parent
// "children" : liste des enfants directs
// "nextElementSibling / previousElementSibling" : frère suivant ou frère précédent
 
let parag = document.querySelector("#second");
 
console.log(parag.previousElementSibling); // Affichera le p sans id
 
// innerHTML vs textContent
// textContent affiche du text BRUT alors que innerHTML transcrit le HTML en balises
let inner = document.querySelector("#exempleInner");
let text = document.querySelector("#exempleText");
 
text.textContent = "<div> coucou </div>";
inner.innerHTML = "<div><p><i>coucou</i></p></div>";
 
// Cloner un élément
let clone = document.querySelector('#parent').cloneNode(true);
 
document.body.appendChild(clone);
 
// Petit rappel
// Générer dynamiquement une structure complète
 
// document.createElement() pour créer un élément
// appendChild() pour les imbriquer
// setAttribute() pour leur donner un attribut
// textContent ou innerHTML pour insérer du contenu
 
// Les classes
// Manipuler les classes avec classList
 
let cobbaye = document.createElement('span');
 
// ajouter une classe
 
cobbaye.classList.add('class1', 'class2', 'class3');
console.log(cobbaye);
 
// Retirer une classe
 
cobbaye.classList.remove('class1');
console.log(cobbaye);
 
// Toggle (Ajoute ou supprime la classe si elle est présente ou non)
cobbaye.classList.toggle('class1');
console.log(cobbaye);
 
// contains (Vérifie si la classe existe dans l'attribut ), renvoie True /False
 
let check = cobbaye.classList.contains('class1');
console.log(check);
 
 
// value de formulaire
 
let nom = document.querySelector('#nom').value;
console.log(nom);
nom = "Hakim";
console.log(nom);
let prenom = document.querySelector('#prenom').value;
console.log(prenom);
prenom = "Hakim";
 
console.log(prenom);
 