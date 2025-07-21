/**
 * LES OBJETS EN JAVASCRIPT
 * 
 * Qu'est ce qu'un objet ?
 * 
 * En Javascript, un objet est une structure qui permet de stocker
 * des paires cles/valeur.
 * 
 * Chaque propriété est définie comme :
 * Clé : valeur
 * 
*/
// -- Exemple :

const PERSONNE = {
    nom : "Nadia",
    aimeLeJavascript : true,
    age: 28
};

console.log(PERSONNE);

// Comment accéder aux valeurs d'un objet
// Deux manières

console.log(PERSONNE["nom"]);
console.log(PERSONNE.nom);

// Modifier ou ajouter une propriété

// Modifier

PERSONNE.nom = "Ghislain";

console.log(PERSONNE);

PERSONNE.age = 18;

console.log(PERSONNE);

// Ajouter une propriété

PERSONNE.ville = "Vitry-sur-seine";

console.log(PERSONNE);

// Supprimer : un mot clé DELETE

delete PERSONNE.aimeLeJavascript;

console.log(PERSONNE);

// Boucler sur un objet avec la boucle for ... in

for(let cle in PERSONNE){
    console.log(cle + ":" + PERSONNE[cle]);
}

// Fonction dans un objet
// Mot clé qui s'appelle this

// On crée la classe classe
let classe = {
    // Propriétés : number, boolean, function, object
    nbEleve : 11,
    travaillentBien: true,
    bonjour : function () {
        document.writeln("Nous sommes " + this.nbEleve + " dans la classe");
    },

    sousClasse : {
        nbEleve : 38,
        travaillentBien : false,
        salut: function(){
            document.writeln("Nous sommes " + this.nbEleve);
        }
    }
}

// J'appelle la fonction bonjour()
classe.bonjour();
// J'appelle la fonction salut qui se trouve dans l'objet sousClasse 
// qui ce trouve lui même est dans l'objet classe
console.log()
classe.sousClasse.salut();

// Les Tableaux d'objets

let utilisateurs = [
    {nom: "Alice", age: 30},
    {nom: "Bob", age: 25}
];


    document.writeln(utilisateurs[0].age);
    // for of : Itère sur les VALEURS seulement
    // Users represente les objets en eux même
    
    for(let users of utilisateurs){
        console.log(users.age);
    }

    // for in :
    let utilisateursObj = {
        utilisateur1 : {
            nom : "Alice",
            age :30
        },
        utilisateur2: {
            nom: "Bob",
            age: 25
        }
    }
    // user represente chaque clé de l'objet utilisateursObj (utilisateur1 et utilisateur2)
    for(let user in utilisateursObj) {
        console.log(user.age);
    }
