/**
 * A quoi sert un tableau ?
 * 
 * Il sert à stocker plusieurs valeurs (ou données Ilyes) dans
 * une variable, au lieu d'une seule valeur
 * 
 */

// Créer un tableau

// 1. let tableau = new Array(element1, element2, element3); --> on sépare par des virgules
// 2. let tableau = Array(element0, element1, element2);
// 3. let tableau = [element0, element1, element2];

// Un tableau est composé d'index (c'est la place de l'élément dans le tableau)
//l'index commence TOUJOURS par 0
let fr1 = "papaye"

let fruits = ['pommes','bananes','cerise',20,true,fr1];
console.log(fruits); // !!! Attention, afficher un tableau entier
// ne fonctionnera pas sur PHP

let first = fruits[0]; // On copie le premier élément du tableau fruits
// et on le stock dans la variable first

console.log(first); // Affichera pommes

// Boucler sur un tableau
// let i = 0 (il representera l'emplacement initial dans le tableau vu
// que le tableau commence TOUJOURS par 0)
let couleurs = ["red","green","orange"];
for(let i = 0; i < fruits.length; i++){
    document.writeln(`<p style="color: ${couleurs[i]}"> fruit numéro ${i + 1} est ${fruits[i]} </p>`);
}

// Attention : pour l'ajout, suppression, etc etc, on va quand même copier le tableau

// Méthode push : Ajoute un nouvel élément au tableau MAIS retourne la nouvelle
// longueur du tableau

// Ajouter le dernier élément
fruits.push('Oranges'); // Ajoute Orange au tableau fruits
console.log(fruits);


// Supprimper le dernier élément

fruits.pop(); // Supprime 'Oranges' du tableau
console.log(fruits);
let oranges = fruits.pop();
console.log(oranges);
// supprimer le premier element d'un tableau
let pommes = fruits.shift();
console.log(pommes); // = 'Pommes'

// fruits = ['Bananes','Cerises'];

// Ajouter au début du tableau
let nouvelleLongueur = fruits.unshift('tomates');
console.log(fruits); 
console.log(nouvelleLongueur);

// Trouver l'index d'un élément dans le tableau
let pos = fruits.indexOf("bananes");
console.log(pos);

// Supprimer un élément par son index
let removeItem = fruits.splice(pos, 2);
console.log(fruits);
console.log(removeItem);

// Slice :

// Methode qui renvoie un tableau, contenant une partie superficielle
// d'une portion du tableau d'origine, elle est définie par un index
// de début et un index de fin (exclus)

let animaux = ['Chat','Chien','Lama','ornithorinque','chinchilla','ratel','perroquet'];
let newAnimax = animaux.slice(1,5); // retourne de chien à chinchilla
let list = animaux.slice(3);//retourne de ornithorinque à perroquet
console.log(newAnimax);
console.log(list);
