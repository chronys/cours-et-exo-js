// Syntaxe de base

// Commentaire sur une seule ligne

/* commentaire
sur
plusieurs
lignes
*/

// -- 1 : Déclarer une variable en Javascript
// Déclarer une variable = le mot clé "let" suivi du nom de la variable
// On peut aussi faire directement let prenom = "Rayane";
let prenom;
var prenom2;
// -- 2 : Affecter une valeur à une variable
prenom = "Rayane";
console.log(prenom);
prenom = "Nadia";
console.log(prenom);
prenom = "Ylies";
console.log(prenom);
// -- 3 : Une instruction se termine TOUJOURS par un
// point-virgule, il est aussi possible d'écrire plusieurs
// instructions sur une seule ligne

// inst_1;
// inst_2;
// inst_2; inst_3;

// -- 4 : Afficher une boite de dialogue (2 façons)

alert("Super, tu es arrivé sur mon site !");
window.alert("Super tu es arrivé sur mon site !");

// -- 5 : Afficher dans la console

console.log("Coucou, je suis apprenant au poleS");

// -- 6 : Afficher dans la page web directement

document.writeln("<h1> Hello World ! <h1>");

// -- 7 : Demander à l'utilisateur une valeur (2 façons de faire)
prompt("Question : Quel jour de la semaine sommes-nous ?");

window.prompt("Quel jour de la semaine sommes-nous ?");

// -- Et pour manipuler cette valeur, je dois la stocker;

let jour = prompt("question : Qui a les plus beaux cheveux de la terre?");

console.log(jour);
document.writeln(jour);

// -- 8 : Attention !! Le
//  JS est sensible à la casse('case sensitive')
// mavariable;
// maVariable = camel case;
// ma_variable = snake case; let ma_maison_parisienne;
//let maMaisonParisienne;

let chiffre_additionne;
document.writeln
(chiffre_additionne);

// -- 9 : règles des noms de variable = Une variable ne peut pas
//  commencer par un chiffre, elle doit contenir que des caractères
//  alphanumérique et ne peux pas être un mot reservé(var, let, for, 
// if des elemnts natifs du language JS)

/** LES TYPES DE VARIABLES  */

// -- 1.  Chaines de caractères (string)
let vacances = "2017";
let destination = "Australie";

// -- 2. Nombre entier (Integer ou Int)

let annee = 2017;
let age = 19;

// -- 3. Les nombres decimaux (Float) ATTENTION !!! 
// en anglais les virgules sont des points

let decimal = 2.5;

// --4. Des booléens 
// (Boolean = VRAI / FAUX = TRUE / FALSE);

let unBooleenFalse = false;
let unBooleenTrue = true;

// -- 5. Undefined (Non défini)
let quelquechose; // il sera undefined 
// tant que je ne lui aurais pas donner de valeur

// -- 6. null (nulle);
let nulle = null;

// -- 7. Les constantes

/* La déclaration const permet de créer une
constante accessible uniquement en lecture. Contrairement à une
variable (let, var), sa valeur ne peut plus être modifiée par
réaffection plus bas dans le code, une constante ne peut pas
être déclarée à nouveau dans le même script ! */

// -- Par convention les constatntes sont en majuscules :

const PAYS = "France"; // Type chaine de caractère (string)
const AN = "2025"; // Type chaine de caractère (string)
const BIRTH = 2025; // Type Nombre entier (Int);

// -- 8. TypeOf permet d'identifier le type de ma variable
console.log(PAYS);
console.log(typeof PAYS);

console.log(BIRTH);
console.log(typeof BIRTH);

const PASTRUE = false;
console.log(typeof PASTRUE);

// DOM un peu plus approfondi

// Naviguer dans le DOM
//Le DOM forme un arbre d'éléments liés entre eux :
// Parent, enfants, frères, etc...

//"parentElement" : "Recupère l'élément parent
// "children" : liste des enfants directs
// "nextElementSibling / previous ElementSibling" : frère suivant ou frère précedent

let parag = document.querySelector("#second");

console.log(parag.previousElementSibling); // Affichera le p sans id

// innerHTML vs textContent
// textContent affiche du texte BRUT alors que innerHTML transcrit le HTML en balises
let inner = document.querySelector('#exempleInner');
let text= document.querySelector('#exempleText');

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

cobbaye.classList.add('class1','class2');
console.log(cobbaye);

// Retirer une classe

cobbaye.classList.remove('class1');
console.log(cobbaye);

// Toggle (ajoute ou supprime la classe si elle est présente ou non)
cobbaye.classList.toggle('class1');

// contains (vérifie si la classe existe dans l'attribut), renvoie True / False

let check = cobbaye.classList.contains('class1');
console.log(check);

// value de formulaire

let nom = document.querySelector('#nom').value;
console.log(nom);
let prenom3 = document.querySelector('#prenom').value;

prenom3 = "Hakim";










