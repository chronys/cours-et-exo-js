/* LES OPERATEURS */

/* Les opérateurs (comme leur nom l'indique) consistent à faire des opérations mathématiques en utilisant les symboles +, -, * /, % 

Pour calculer un résultat, j'ai besoin de stocker mes valeurs */

let nb1 = 24; // à ne pas confondre avec "24" qui est un string (chaîne de caractère)
let nb2 = 35;

// Addition ( + )

let resultatAddition = nb1 + nb2;

console.log(nb1 + nb2); // Affichera seulement le resultat des deux variables
console.log(resultatAddition); // Affichera le resultat des deux variables nb1 + nb2 STOCKEES dans la variable resultatAddition

resultatAddtion = resultatAddition + 10; // resultatAddition sera égale à elle même + 10;
console.log(resultatAddition + 10);

// Soustraction ( - )

let resultat_soustraction = nb1 - nb2;
console.log(resultat_soustraction);

// Multiplication ( * )

let resultatMultiplication = nb1 * nb2;
console.log(resultatMultiplication);

// Division ( / )
let resultatDivision = resultatMultiplication / resultatAddition;
console.log(resultatDivision);

// Modulo ( % )
// -- le Modulo retourne le reste d'une division
// -- modulo de nb1 % nb2 avec l'opérateur "%"
// Exemple : Si nb1 = 12 et nb2 = 5 alors nb1 % nb2 est égal à 2 parce qu'il nous faut 5x2 = 10 et 2 pour arriver à 12;
let resultatModulo = nb2 % nb1;
console.log(resultatModulo);

console.log("RESULTAT SEUL : ")

let resultat = nb1 + nb2;
resultat = nb1 - nb2;
resultat = nb1 * nb2;
resultat = nb1 / nb2;
resultat = nb1 % nb2;

console.log(resultat); // Le resultat est égal à nb1 % nb2 car ses valeurs ont été remplacées dans la derniere ligne


