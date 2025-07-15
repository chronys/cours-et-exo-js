/**
 * EXERCICE : COMPTE EN BANQUE
 *
 * J'ai 1000€ sur mon compte
 * Chaque mois j'ajoute 50€
 * Combien de temps me faut-il pour avoir 2000€ sur mon compte ?

let mois = 0;
// for (var soldeActuel = 1000; soldeActuel < 2000; soldeActuel += 50) {
    //     mois++;
    // }
    
    let count = 1000;
    
    while (count < 2000) {
        count += 50; // count = count + 50;
        mois++;
    }
document.writeln("<p>Il m'aura fallut " + mois + ' mois pour accumuler ' + count + '</p>');
*/

/**
 * EXERCICE : NI OUI NI NON
 *
 * Demander à l'utilisateur s'il veut jouer à ni oui ni non, il ne doit répondre NI OUI NI NON, sinon on lui donne le nombre de tours qu'il a joué avant de perdre

let prompteur = prompt("Est-ce que tu veux jouer à ni oui ni non ?");;
let compteur = 0;

while (prompteur != 'oui' && prompteur != 'non' && prompteur != 'OUI' && prompteur != 'NON') {
    prompteur = prompt("Est-ce que tu veux jouer à ni oui ni non ?");
    
    compteur++;
}
compteur--;
if (compteur == 1) {
    document.writeln("<p> Super, vous avez fait " + compteur + " tour </p>");
} else {
    document.writeln("<p> Super, vous avez fait " + compteur + " tours </p>");
}
*/
 
// exercice pairs :

/**
 * A l'aide d'une boucle, parcourez les nombres de 0 à 100 et document.write ceux qui sont pairs et les impairs
 * mais pas de la même couleur
 * 
 * BOUCLES + CONDITIONS
 * 
 */

let compte = 0;
while (compte < 100){
compte++;
if (compte % 2 == 0) {
    document.writeln("<p style='color: blue'>" + compte + " Le chiffre est pair" + "</p>")
} else {
    document.writeln("<p style='color: red'>" + compte + " le chiffre est impair" + "</p>")
}
}



