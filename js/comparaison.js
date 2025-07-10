// LES OPERATEURS DE COMPARAISON

// SURTOUT PAS (A = B)

// l'opérateur de comparaison == signifie 'egale à'
// Il permet de vérifier que les VALEURS de 2 variables sont identiques

let nb1 = 123;
let nb2 = "123";

console.log(nb1==nb2); // Retournera TRUE (c'est vrai que les valeurs nb1 et nb2 sont les mêmes)

// L'opérateur de comparaison stricte === signifique 'égal à'
// à la différence de ==, il verifie également le type de la variable et sa valeur

console.log(nb1===nb2); //(retournera FALSE (nb1 est de type Number et nb2 de type string)

// L'opérateur différent != signifie 'Différent de ... EN VALEUR'

console.log(nb1 != nb2); // retournera FALSE (les valeurs ne sont pas différentes)

// l'Opérateur strictement !== Signifie 'Strictement différent de ... EN TYPE ET VALEUR'

console.log(nb1 !== nb2); // Retournera TRUE (les valeurs sont les mêmes mais les types sont différents)

// l'opérateur > signifie 'plus grand que'

console.log(nb1 > nb2); // retourne false

// l'opérateur >= signifie 'plus grand ou égale à'

console.log(nb1 >= nb2);

// l'opérateur < signifie 'plus petit que'

console.log(nb1 < nb2); // retourne false

// L'opérateur <= signifie 'plus petit ou egale à'

console.log(nb1 <= nb2); // Retourne True

// Conversion des types :
nb2 = parseInt(nb2); // Converti en nombre
console.log(typeof nb2);

nb2 = parseFloat(nb2); // Converti en décimale

nb1 = nb1.toString(); // Converti en chaîne de caractère
console.log(typeof nb1, typeof nb2);

