/* let prompt1 = prompt("choisis un nombre");

if (prompt1 > 0) {
  document.writeln("<h1>le chiffre est positif</h1>");
} else if (prompt1 < 0) {
  document.writeln("<h1>le chiffre est negatif</h1>");
} else {
  document.writeln("<h1>le chiffre est NULLLLLL comme macron</h1>");
}

let prompt2 = prompt("Quel âge avez vous?");

if (prompt2 > 17) {
  document.writeln("<h1>vous êtes majeur</h1>");
} else if (prompt2 < 18) {
  document.writeln("<h1>vous minez du charbon?</h1>");
}

let prompt3 = prompt("quel jour de la semaine sommes-nous?");

switch (prompt3) {
  case "lundi":
  case "Lundi":
    document.writeln("<h1>On est lundi</h1>");
    break;
  case "mardi":
  case "Mardi":
    document.writeln("<h1>On est mardi</h1>");
    break;
  case "Mercredi":
  case "mercredi":
    document.writeln("<h1>On est mercredi</h1>");
    break;
  default:
    document.writeln("<h1>Ok cool</h1>");
}

let prompt4 = prompt("quel est ton language de programmation preferé ?");

switch (prompt4) {
  case "python":
  case "Python":
    document.writeln("<h1>-__- c'est un serpent le python !</h1>");
    break;
  case "JS":
  case "js":
  case "Javascript":
  case "javascript":
    document.writeln("<h1>devine en quelle language je te parle là :)</h1>");
  default:
    document.writeln("<h1>j'vais pas tous les faire frère</h1>");
}

let prompt5 = prompt("que voulez vous? entrée ou plat ?");



switch (prompt5) {
  case "plat":
    prompt6 = prompt("soupe ou poisson ?");
    document.writeln("<h1>tu as choisis poisson euhh.. soupe desolé je suis mauvais serveur</h1>");
    break;
  case "entré":
    prompt11 = prompt("je n'ai que la sortie desolé");
    break;
  default:
    document.writeln("<h1>g pa compri</h1>");
}

let nb1 = prompt("pick a price");

if (nb1 > 0) {
    document.writeln(nb1*1.2 + "€");
}

 let nb2 = 10;
 let nb3 = 40;
let c = a;
a = b;
b =c;



           
            let badgeValide = 5555;
            let code = 4444;

            badgeValide = 5555;
            code = 447744;

            if ((badgeValide == badgeValide) && (code == code)) {
                console.log('Accès autorisé');
            }

            else {
                console.log('Accès refusé');
            }


            // Exercice BOOLEEN correction

            let badgeValid = true;
            let codeCorrect = true;


            if(badgeValid && codeCorrect == true) {
                console.log('Accès autorisé');
            } else {
                console.log('Accès refusé');
            }

            let id = true;
            let mdp = true;

            if(id && mdp == true){
                console.log('connexion réussie');
            }

            */

            /* Exercice 1 : Entrée gratuite
Demande l’âge de l’utilisateur et s’il a une carte de membre (true/false).
- L’entrée est gratuite si l’âge est inférieur à 12 **ou** s’il a une carte.
- Affiche "Entrée gratuite" ou "Paiement requis" selon le cas. */
/*
let age = prompt("quel age avez vous ?");
let cartemembre = prompt("do you have une carte de membre ?");

if(age <12 ^ cartemembre =='oui') {
console.log('entrée gratuite')
} else {
    console.log('paiement requis')
}
 Exercice 2 : Accès restreint
Demande si l’utilisateur est connecté (true/false) **et** s’il est administrateur (true/false).
- L’accès est autorisé uniquement si l’utilisateur est connecté **et** administrateur. 

let connexion = prompt('etes vous coconnecté ?');
let admin = prompt('etes vous administrateur ?');

if (connexion && admin =='oui') {
    console.log('bienvenu Grand Maître');
}
else {
    console.log("vous n'êtes pas mon Maître, accès refusé !")
} */

/* Exercice 3 : Feu tricolore
Demande la couleur d’un feu (rouge, orange, vert) **et** si la route est dégagée (true/false).
- L’utilisateur peut passer uniquement si le feu est vert **et** la route est dégagée 

let feu = prompt('quelle est la couleur du feu?');
let route = prompt('esque la route est degagée');

if (feu == 'vert' && route == 'oui') {
    console.log('vous pouvez passer')
} else {
    console.log('vous ne passerez pas !')
}
    

Exercice 4 : Réduction spéciale
Demande l’âge de l’utilisateur **et** s’il est étudiant (true/false).
- Une réduction est appliquée si l’utilisateur a moins de 26 ans **ou** est étudiant. 

let âge = prompt('quel âge avez vous ?');
let etudiant = prompt('etes vous etudiant?');

if (âge <= 26||etudiant == 'oui' ) {
    console.log('reduction appliquée');
} else {
    console.log('16,50€ pour la place de cinéma');
}
    
Exercice 5 : Identifiants valides
Demande un nom d’utilisateur et un mot de passe (chaînes non vides).
- Affiche "Connexion en cours" uniquement si les deux champs sont remplis (**et**). */

let user = prompt("votre nom d'utilisateur");
let mdp = prompt("entrez votre mot de passe");

if (user && mdp) {
    console.log ("connexion en cours");
} 
/*

Exercice 6 : Alerte météo
Demande si le temps est pluvieux (true/false) **et** s’il y a du vent (true/false).
- Affiche "Alerte météo" si les deux conditions sont vraies 

let temps = prompt("esque le temps est pluvieux ?");
let vent = prompt("y'a t-il du vent ?");

if (temps&&vent=="oui") {
    console.log("Alerte météo");
} 

Exercice 7 : Porte verrouillée (XOR)
Demande si la porte est verrouillée de l’intérieur **ou** de l’extérieur (true/false chacun).
- Affiche "Porte sécurisée" uniquement si **une seule** des deux conditions est vraie. 

let portint = prompt("esque la porte est verouillé de l'intérieur ?");
let portex = prompt("esque la porte est verouillé de l'exterieur ?");

if (portint == "oui" ^ portex == "oui") {
    console.log("Porte securisée")
}


Exercice 8 : Achat possible
Demande si l’utilisateur a une carte cadeau **ou** un bon de réduction (true/false chacun).
- Affiche "Achat possible" s’il a au moins un des deux 

let cc = prompt("avez vous une carte cadeau ?");
let br = prompt("avez vous un bon de reduction?");

if (cc =="oui" || br =="oui") {
    console.log("Achat possible") 
}
    Exercice 9 : Vote valide (XOR)
Demande si la personne a voté en ligne **ou** en personne (true/false chacun).
- Le vote est valide uniquement si **exactement une** des deux options est vraie 

let vote = prompt ("avez vous voter en ligne ou en personne ?");

if (vote =="en ligne" ||vote=="en personne") {
    console.log ("vote valide")
}

Exercice 10 : Port du casque obligatoire
Demande si l’utilisateur roule à vélo **ou** en trottinette (true/false chacun).
- Le port du casque est obligatoire si **au moins un** des deux est vrai. 

let velo = prompt("roulez vous en vélo?");
let trottinette = prompt("roulez vous en trotinette?");

if (velo =="oui" || trottinette =="oui") {
     console.log ("le port du voile euh... du casque est obligatoire")
} */

