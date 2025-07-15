// LES BOUCLES

/** LES Boucles sont des structures qui servent
 *  à executer du code autant de fois que necessaire
 * 
 * Il existe plusieurs types de boucles mais les plus utilisées sont les suivantes : For / While
 * 
 * 
 *  
 * 

// La boucle while (Tant que)

let compteur = prompt("etes vous bloquer dans l'izanami?");

// Tant que mon compteur est STRICTEMENT inférieur à 10 (c'est à dire tant qu'il n'est pas égal à 9),
// la boucle se relance jusqu'à ce que la condition soit false;

while(compteur < 10){
    document.writeln("<h1 style='color: blue'> Voici mon compteur : " + compteur + "</h1>");


    // ATTENTION : ne pas oublier d'incrementer
    compteur++

}

*/

let response ='';
while (response != 'non' && response != 'chiwawa') {
    response = prompt("etes vous bloqué dans l'Izanami ?");
    console.log(response);

}

// DO ... WHILE :
// A la différence de WHILE, Do While executera toujours le
// premier tour de sa boucle MEME si la condition est fausse
let i = 0;
do {
    document.writeln(i);
    i++;
} while(i > 1);

// La boucle FOR

/*
for (3 arguments){
... Code à éxécuter
}

for(let i = 0; i < 10; i++){
}

Différence avec While :

let i = 0;

While(i < 5){
i++;
}
*/

for(let i = 0; i <= 20; i ++) {
    document.writeln("<h3> Salut, je suis le numéro" + i + "</h3>");
}