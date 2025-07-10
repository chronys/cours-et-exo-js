let prompt1 = prompt("choisis un nombre");


if (prompt1 > 0) {
    document.writeln("<h1>le chiffre est positif</h1>");
} 
else if (prompt1 < 0) {
    document.writeln("<h1>le chiffre est negatif</h1>");
}
else {
    document.writeln("<h1>le chiffre est NULLLLLL comme macron</h1>");
}

let prompt2 = prompt("Quel âge avez vous?");

if (prompt2 > 17) {
    document.writeln("<h1>vous êtes majeur</h1>");
}

else if (prompt2 < 18) {
    document.writeln("<h1>vous minez du charbon?</h1>");
}

let prompt3 = prompt("quel jour de la semaine sommes-nous?");

switch (prompt3) {
    case  "lundi":
        case "Lundi":
            document.writeln ("<h1>On est lundi</h1>");
            break;
    case  "mardi":
        case "Mardi":
            document.writeln ("<h1>On est mardi</h1>");
            break;
    case  "Mercredi":
        case "mercredi":
            document.writeln ("<h1>On est mercredi</h1>");
            break;
default:
    document.writeln ("<h1>Ok cool</h1>");

}

let prompt4 = prompt("quel est ton language de programmation preferé ?");

switch (prompt4) {
    case "python":
        case "Python":
            document.writeln ("<h1>-__- c'est un serpent le python !</h1>");
            break;
            case "JS":
                case "js":
                    case "Javascript":
                        case "javascript":
                            document.writeln ("<h1>devine en quelle language je te parle là :)</h1>");
                            default:
                                document.writeln ("<h1>j'vais pas tous les faire frère</h1>");

}

let prompt5 = prompt("que voulez vous? entrée ou plat ?");
prompt6 = prompt("soupe ou poisson ?")
alert("CETAIT UN PIEGE VOUS ETES BLOQUER DANS L'INAZAGI" + prompt5);

switch (prompt5) {
    case "plat":
        break;
        prompt6;
    case "ok j'abandonne":
        case "jabandonne":
            case "j'abandonne":
        document.writeln ("<h1>ton abandon fut ta victoire</h1>");
        break;
    default:
        prompt5;
        break;
}

let prompt7 = ("choisis un nombre");
let prompt8 = ("chosis en un autre");
let prompt10 = ("choisis un signe mathématique");






