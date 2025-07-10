/* LA CONCATENATION */

let annee = 2025;
let futur = 3;

let resultat = annee + futur;
console.log(resultat);
// Concatenation : La concatenation est le fait de lier
// un type string avec d'autres types ou lui même

let phrase1 = "Aujourd'hui je suis ";
let phrase2 = "heureux, c'est Louis qui l'a dit !";

console.log(phrase1 + phrase2);

// 3façons de concatener

// avec double guillemets
document.writeln(
  "<p> l'annee " + annee + " + " + futur + " = " + resultat + "</p>");

// avec simples guillemets (Attention aux mots à apostrophes)
document.writeln("<h2> Nous sommes actuellement en " 
    + annee + "</h2>");

    // En backtick 
    document.writeln(`<h3> Nous sommes en ${annee}</h3>`);
