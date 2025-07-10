/* LES CONDITIONS */

// -- Structure de base : if

if(true) { // Par defaut la condition à vérifier (le if vérifie si elle est vraie)
    /* Code à éxécuter */
}

// EXEMPLE :

let nb1 = 10;
if(nb1 <50) {
    console.log('nb1 est inférieur à 50');
}

if(true){
    // Code si la condition est vraie
} else {
    /* si la condition est fausse */
}

if(nb1 > 50){
    console.log("nb1 est supérieur à 50");
} else {
    console.log("nb1 n'est pas supérieur à 50");
}

// ELSE IF

// Else if est reservé au cas où une autre condition serait acceptable pour notre code

let nb2 = 50;

let nb3 = 60;

if(nb2 > nb3) {
    console.log(`${nb2} est supérieur à ${nb3}`);
} else if (nb2 == nb3) {
    console.log(`${nb2} est égal à ${nb3}`);
} else {
    console.log("tu m'embetes avec tes conditions");
}

// SWITCH

// LE switch vérifie UNE variable selon des cas

let str = 'Hakim';

switch(str){
    case 'Nadia' :
        str = "Je m'appelle Nadia";
        break;
        case "Hakim":
            str = "Je m'appel Hakim";
            break;
            case "N'golo":
                str = "Je m'appel N'golo";
                break;
                default:
                    str ="Je n'ai aucun prénom";
                    break;
}
console.log(str);

// En utilisant les prompts

let prompteur = prompt("Quelle est la couleur de vos yeux");

switch(prompteur) {
    case "bleus":
        case "bleu":
document.writeln("<h1>Les yeux bleus rappellent la couleur de l'ocean </h1>");
break;
case "verts":
    document.writeln("<h1>ta les yeux vert bravo t'es content? c'est très rare jsuis jaloux </h1>");
    break;
    case "marrons":
        case "marron":
        document.writeln("<h1>ta les yeux caca ahahaha </h1>");
        break;
        case "vairons":
            document.writeln("<h1>je connais même pas le mot vairons tu te sens special? </h1>");
            break;
            default:
                document.writeln("<h1>j'espere ta pas d'yeux sinon ca va m'ennerver </h1>");
            }
            console.log(prompteur);