/**
 * LES FONCTIONS
 * 
 * Les fonctions sont des structures qui permettent 
 * de réutiliser le code à l'intérieur indéfiniment
 * selon les besoins
 * 
 * structure :
 * 
 * function nomdelafonction(){
 * ... Code à éxécuter !;
 * }
 */

// Les fonctions prédéfinies (native)
// document.writeln()

// indexof()

// Cherche la position d'un element dans une chaine de caractère
//(si l'élément n'est pas trouvé il retourne -1)

let phrase = "pate";

let position = phrase.indexOf("e"); // Cherche la position du e dans 'pates'

document.writeln(position);

console.log();

// includes()

// Vérifie si une chaine de caractère contient un élément (retourne true ou false)

let email = prompt("quel est votre email?");

if(email.includes('@')) {
    alert('email Valide');
} else {
    alert('Email invalide');
}

// toLowerCase(), toUppercase() minuscule et majuscule

// lenght : length retourne la longueur d'une chaine
//  de caractère (ou le nombre d'éléments d'un tableau)

let phrase1 = "Nadia m'a demandé une phrase !";

document.writeln(phrase1.length);

// Fonctions Utilisateurs

/** les 4 types de fonctions personnalisées */

// 1 . Function sans paramètre sans valeur de retour
function hellWorld(){
    console.log('cc');
}

// On laisse les paramètre et la fonction ne dispose d'aucun return
function additionSansVSansR(){
    document.writeln("<p>" + (10 + 2) + "</p>"); // '<p> ${10 + 2}</p>';
} // J'appel ma fonction
additionSansVSansR();

//On rempli le ou les paramètrres et la fonction ne dispose d'aucun return

function additionAvecVSansR(num1, num2) {
    document.writeln(`<p> ${num1 + num2} </p>`);
}

// Je rempli mes paramètres à chaque fois que j'appelle ma fonction

additionAvecVSansR(30, 50);
additionAvecVSansR(60, 200);

// 2 . Function avec paramètre sans valeur de retour
function bonjourClasse(prenom){
    document.writeln("bonjour " + prenom);
}

// Je mets mon paramètre ici (dans les parenthèses)
bonjourClasse('Sabrina');
bonjourClasse('Bintou');
bonjourClasse('Blabla');
hellWorld();

// 3 . Function sans paramètre avec valeur de retour

function byebye(){
// On utilise le mot clé
return "Au revoir";
}

// La spécificité ici, c'est que vu qu'il y'a un return, il nous retourne une valeur
// qu'on dois stocker

let ciao = byebye();
console.log(ciao);

// 4 . Function avec paramètre avec valeur de retour

function addition(num1, num2){
    return num1 + num2;
}

function bonjourR() {
return (`<p> Bonjour tout le monde </p>`);
}

let bonjour1 = bonjourR();
document.writeln(bonjour1);



let addition1 = addition(4,10);
console.log(addition1);

addition(122, 122);


// Function avec PROMPT :

function meteo(saison, temperature) {
    let message = `Nous sommes en ${saison} et il fait actuellement ${temperature}
    degres`;

    document.writeln(`<p> ${message} </p>`);
}

let saison = prompt("Donne moi une saison :");
let temperature = prompt("Donne moi une temperature :");

meteo(saison, temperature);

console.log(saison, temperature);
