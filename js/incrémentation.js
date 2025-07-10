/* incrémentation */

// -- Incrémentation

let nb1 = 1;

nb1 = nb1 + 1;
nb1 += 100; // nb1 = nb1 + 100;

// Ecriture simplifiée
nb1++; // NE FONCTIONNE QU AVEC 1 !!
console.log(nb1);

// Décrementation

nb1 = nb1 -1;
nb1--;

// incrementation 2 :

let nb2 = 5; 
console.log(nb2); 
let x = nb2++; // si nb2++ alors la variable x recupère la valeur de nb2 AVANT l'incrementation et sera donc égale à 5,
// en revanche si ++nb2 alors l'incrementation est effectuée avant la récupération de la valeur, X sera donc égal à 6;
console.log(x);
console.log(nb2);
