/*LES ECOUTEURS D EVENEMENT

1 . Qu'est ce qu'un evenement ? 

Un événement est une action ou un comportement détécté par le navigateur : 

Exemples : 

- Un clic de souris
- un appui sur une touche de clavier
- un survol 
- le chargement d'une page


2 . Pourquoi utiliser des écouteurs ? 

Un écouteur d'evenement (event Listener) permet de dire à la page : 

"Quand l'utilisateur fait ceci (evenement), tu fais ça (fonction)"
*/


// 3 . Syntaxe de base 

// element.addEventListener('evenement', functionaexecuter());

let click = document.querySelector("#clickclick");

// J'ai récupéré l'élément HTML avec l'id #clickclick
// Lorsque je clique sur le bouton, il analyse le type 
// de comportement à avoir ("ici le click") puis il execute la fonction anonyme.
click.addEventListener('click', function () {
    let div = document.createElement('div');

    div.innerHTML = "<h1 style='color : pink'> C'est la pause ! </h1>";

    document.body.appendChild(div);
});


/* 4. Types d'évenements les plus courants 

click  = 'click de souris',
dblclick = "double click de souris",
mouseover = 'survol de souris',
mouseout = 'quand la souris quitte l'élément',
keydown = 'Touche du clavier pressée',
keyup = 'touche relachée', 
submit = 'Formulaire envoyé',
change = 'valeur changée (input, select)'
input = 'text saisi en temps réel (sur input)'
load = 'Page ou image chargée'
*/

// 5. Fonction nommée vs fonction anonyme 

// function direBonjour() {
//     console.log("Bonjour !");
// }

// click.addEventListener('click', direBonjour);
// 6. Retirer un écouteur
// removeEventListener : ATTENTION , il faut obligatoirement une fonction nommée , ne fonctionne pas sur Anonyme
// click.removeEventListener('click', direBonjour);

// 7. Evenements sur plusieurs éléments 

let tousMesboutons = document.querySelectorAll('.test');

// tousMesBoutons contient un tableau avec 3 boutons
// Pour chacuns (btn represente chaque bouton individuellement)
tousMesboutons.forEach(btn => {
    // ecouteur d'evenement sur chaque bouton (click), LE BOUTON sur lequel je click activera son propre écouteur d'évenement
    btn.addEventListener('click', function () {
        alert('bouton cliqué !');
        btn.style.backgroundColor = "blue";
    })
});


// 8. Objet (event) (détail de l'événement)
// Il sert à savoir par exemple : quelle touche a été préssée, quel élément a été cliqué etc etc 

document.addEventListener('keydown', function (event) {
    console.log("Touche pressée : " + event.key);
})

// 9. BONUS : Astuce utile 
let form = document.querySelector('form');
/* 
form = {
    addEventListener():
    querySelector() : 
}
*/
form.addEventListener('submit', function (event) {
    event.preventDefault();  // Empecher l'envoi du formulaire

    // Je peux faire mes vérifications d'usage
    let message = [];
    // let error = false (Il n'y a aucune erreur de base)
    let error = false;

    // si la VALEUR de mon input (ce que j'écris à l'interieur) a une longueur inférieure à 3 caractères ALORS je réaffecte la valeur de ma variable message et je change la variable error en TRUE pour signifier une erreur
    if (this.querySelector('#nom').value.length < 2) {
        message.push("Votre nom doit avoir 2 caractères ou plus");
        error = true;
    }

    if (this.querySelector('#prenom').value.length < 2) {
        message.push("votre prénom doit avoir 2 caractères ou plus");
        error = true;
    }

    if (error == false) {
        // code pour envoyer au serveur ou passer à la suite

    } else {
        document.body.append(message);
    }
})
