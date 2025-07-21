/* Exercice 1 : Création de tableau
Crée un tableau contenant 4 prénoms.
Affiche le premier et le dernier élément dans la console.
Exercice 2 : Ajouter avec push
Crée un tableau avec 3 fruits.
Ajoute un fruit à la fin du tableau avec `push()`.
Affiche le tableau après ajout.
Exercice 3 : Ajouter avec unshift
Crée un tableau avec 3 villes.
Ajoute une ville au début avec `unshift()`.
Affiche le tableau après ajout.
Exercice 4 : Retirer avec shift
Crée un tableau avec 5 couleurs.
Retire la première couleur avec `shift()`.
Affiche le tableau après suppression.
Exercice 5 : Utilisation de splice (suppression)
Crée un tableau avec 5 animaux.
Supprime le 3e élément avec `splice()`.
Affiche le tableau modifié.
Exercice 6 : Utilisation de splice (insertion)
Crée un tableau avec les éléments ['a', 'b', 'd'].
Ajoute l’élément 'c' à la bonne position pour avoir ['a', 'b', 'c', 'd'].
Utilise `splice()`.
Exercice 7 : Utilisation de slice
Crée un tableau de 6 nombres.
Crée un nouveau tableau contenant les 3 éléments du milieu.
Utilise `slice()` pour le faire.
Exercice 8 : Taille du tableau
Crée un tableau avec des noms de pays.
Affiche le nombre d’éléments du tableau avec `.length`.
Exercice 9 : Boucle sur un tableau
Crée un tableau avec 4 prénoms.
Utilise une boucle `for` pour les afficher un par un dans la console.
Exercice 10 : Manipulations enchaînées
Crée un tableau vide.
- Ajoute 2 éléments au début
- Ajoute 3 éléments à la fin
- Supprime 1 élément du début
- Supprime 1 élément du milieu avec `splice()`
Affiche le tableau final. */

let tableau = ["Jean","Sapristi","Jenna","Georges"];
console.log(tableau[0],tableau[3]);
console.log(tableau[0], tableau[tableau.length - 1]);
console.log(tableau[3]);

let tab1 = ["tomate","pomme","ananas"];
tab1.push('melon');
console.log(tab1);

let tab2 = ["vitry","creteil","palavas-les-flot"];
tab2.unshift("paris");
console.log(tab2);

let tab3 = ["jaune","vert","rouge","bleu","violet"];
tab3.shift();
console.log(tab3);

let tab4 = ["lapin","cheval","grenouille","chat","chien"];
tab4.splice(2,1)
console.log(tab4);

let tab5 = ["A","B","D"];

let tabreturn5 = tab5.splice(2,0,"C");
console.log(tab5);

let tab6 = [21,11,77,144,55447,6321];
let tab61 = tab6.slice(2,5);
console.log(tab61);

let tab7 = ["varsovie","commonwealth","kazaksthan"];
console.log(tab7.length);

for (let i = 0; i < tableau.length; i++) {
    console.log((`${tableau[i]}`));
}

let tab8 = [];
// Unshift : video = ['Nadia', 'Ilyes']
let ret1 = tab8.unshift("elem1","elem2");
let ret3 = tab8.push("elem3");
let ret4 = tab8.push("elem4");
let ret5 = tab8.push("elem5");

tab8.shift();
tab8.splice(1,1);
console.log(tab8);
