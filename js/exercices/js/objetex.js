/* Exercice 1 : Créer un objet simple
Crée un objet `animal` avec les propriétés suivantes : espece, age, estDomestique.
Affiche l’objet entier dans la console.

Exercice 2 : Lire une propriété
Reprends l’objet `animal`.
Affiche uniquement la propriété `espece` avec une des deux syntaxes vues en cours.

Exercice 3 : Modifier une propriété
Modifie l’âge de l’animal à 10, puis affiche à nouveau l’objet dans la console.

Exercice 4 : Ajouter une propriété
Ajoute une propriété `couleur` à l’objet `animal`.
Donne-lui une valeur au choix, puis affiche l’objet.

Exercice 5 : Supprimer une propriété
Supprime la propriété `estDomestique` avec `delete`.
Affiche l’objet après suppression.

Exercice 6 : Boucle for...in
Utilise une boucle `for...in` pour afficher toutes les valeurs contenues dans l’objet `animal`.

Exercice 7 : Objet avec fonction
Crée un objet `voiture` avec une propriété `marque`, une propriété `annee`, et une fonction 
`presentation()` qui affiche :
"Cette voiture est une [marque] de [annee]" en utilisant `this`.

Exercice 8 : Objet imbriqué
Crée un objet `ecole` avec une propriété `nom`, et une propriété `classe` qui est un objet 
contenant `nbEleves` et une fonction `info()`.
Appelle cette fonction pour afficher le nombre d’élèves.

Exercice 9 : Tableau d’objets
Crée un tableau `produits` contenant 2 objets, chacun ayant `nom` et `prix`.
Affiche le prix du premier produit.

Exercice 10 : Boucle for...of sur tableau d’objets
Parcours le tableau `produits` avec une boucle `for...of` et affiche le nom de chaque produit 
dans la console.

*/


/**
 * EXERCICES SUR LES OBJETS
 */
 
// Exercice 1 : Créer un objet simple
 
let animal = {
    espece: "chien",
    age: 7,
    estDomestique: true
}
 
console.log(animal);
 
// Exercice 2 : Lire une proprité
 
console.log(animal.espece);
console.log(animal['espece']);
 
// Exercice 3 : Modifier une propriété
 
animal.age = 10;
console.log(animal);
 
// Exercice 4 :
 
animal.couleur = "rouge";
console.log(animal);
 
// Exercice 5 :
 
delete animal.estDomestique;
console.log(animal);
 
// Exercice 6 :
 
for (let anim in animal) {
    console.log(anim);
    console.log(animal[anim]);
}
 
// Exercice 7 :
 
let voiture = {
    marque: "Fiat Panda 2 commercial millesime",
    annee: 2005,
    presentation() {
        document.writeln(`Cette voiture est une ${this.marque} de ${this.annee}`);
    }
}
 
voiture.presentation();
 
// Exercice 8 :
 
let ecole = {
    nom: "Ecole du web",
    annee: 2025,
    classe: {
        nbEleves: 11,
        info() {
            console.log(`Cette classe s'appelle ${ecole.nom} et elle est composée de ${this.nbEleves} eleves`);
        }
    }
}
 
ecole.classe.info();
 
// Exercice 9 :
 
let produits = [{ nom: "sauce tomate", prix: 2.69 }, { nom: "tournevis", prix: 3 }]; // let produits = ['Sauce Tomate', 'Tournevis']
 
console.log(produits[0].prix);
 
 
// Exercice 10 :
// For of il parcourt les index
for (let prod of produits) {
    console.log(prod);
    console.log(prod.nom);
}

