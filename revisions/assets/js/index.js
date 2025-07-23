/** Partie JS de la todo list 

let input = document.querySelector("#tache");
let button = document.querySelector("#ajouter");
let ul = document.querySelector("#liste");
// dès qu'on va CLIQUER sur le bouton, on va
// recuperer la valeur de l'input (vérifier qu'il
// y'a bien une valeur?), créer un li et
// ajouter au UL
button.addEventListener("click", function () {
  if (!input.value) {
    alert("attention, votre tâche est vide !");
    // On ne retourne rien, il va empecher l'execution
    // du reste du code et sortir de l'ecouteur
    // d'evenement.
    return;
  }
  let li = document.createElement("li");
  li.textContent = input.value;
  let supp = document.createElement("button");
  supp.classList.add("btn-supprimer");
  supp.addEventListener("click", function () {
    this.parentElement.remove();
  });
  let check = document.createElement("input");
  check.setAttribute('type', 'checkbox');
  check.classList.add("btn-check");
  check.addEventListener("click", function () {
    if (this.classList.contains('btn-check').color == "green") {
      this.parentElement.style.background = "grey";
    } else {
      this.parentElement.style.background = "green";
    }
  });
  li.appendChild(check);
  li.appendChild(supp);
  ul.appendChild(li);
});
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (!input.value) {
      alert("Attention, votre tâche est vide !");
      // On ne retourne rien, il va empêcher l'execution du reste du code et sortir de l'écouteur d'évenement.
      return;
    }
    let li = document.createElement("li");
    li.textContent = input.value;
    let supp = document.createElement("button");
    supp.classList.add("btn-supprimer");
    supp.addEventListener("click", function () {
      this.parentElement.remove();
    });
    li.appendChild(supp);
    ul.appendChild(li);
  }
});
*/

let i = document.querySelector("#tache"),
  ul = document.querySelector("#liste");
const addTask = () => {
  let v = i.value.trim();
  if (v)
    ul.insertAdjacentHTML(
      "beforeend",
      `<li><input type="checkbox" class="btn-check">${v}<button class="btn-supprimer"></button></li>`
    );
  i.value = "";
};
document.querySelector("#ajouter").onclick = addTask;
i.onkeydown = (e) => {
  if (e.key === "Enter") addTask();
};
ul.onclick = (e) => {
  if (e.target.matches(".btn-supprimer")) e.target.parentElement.remove();
  if (e.target.matches(".btn-check"))
    e.target.parentElement.style.backgroundColor = e.target.checked
      ? "green"
      : "";
};

let boutons = document.querySelectorAll(".reponse");
let pp = document.createElement("p");
boutons.forEach((btn) => {
  btn.addEventListener("click", function () {
    pp.id = "resultat";
    if (this.textContent == "Paris") {
      pp.textContent = "Bonne réponse";
      pp.style.background = "green";
    } else {
      pp.textContent = "Mauvaise reponse TU EST NUL ! NUUUUUL §§§§§";
      pp.style.background = "black";
      pp.style.color = "red";
    }
    document.querySelectorAll(".quiz-box").forEach((quizz) => {
      quizz.appendChild(pp);

      if (
        pp.textContent == "Bonne réponse" ||
        pp.textContent == "Mauvaise reponse TU EST NUL ! NUUUUUL §§§§§"
      ) {
        document.querySelector("h2").textContent =
          "Qui est à l'origine de la démocratisation de la pierre de Rosette ?";
        document.querySelector("#r1").textContent = "René Descartes";
        document.querySelector("#r2").textContent = "Jean François Champollion";
        document.querySelector("#r3").textContent = "Albert Einstein";

        if (this.textContent == "Jean François Champollion") {
          pp.textContent = "Bonne réponse";
          pp.style.background = "green";
        } else {
          pp.textContent = "Mauvaise reponse TU EST NUL ! NUUUUUL §§§§§";
          pp.style.background = "black";
          pp.style.color = "red";
        }
      }

      if (
        pp.textContent == "Bonne réponse" ||
        pp.textContent == "Mauvaise reponse TU EST NUL ! NUUUUUL §§§§§"
      ) {
        document.querySelector("h2").textContent =
          "Quel personnage historique est à l'origine du manuel dont est issu le fameux'lorem ipsum' tant utilisé pour générer du texte aléatoire en impremerie/programmation ?";
        document.querySelector("#r1").textContent =
          "Johann Wolfgang von Goethe";
        document.querySelector("#r2").textContent = "Victor Hugo";
        document.querySelector("#r3").textContent = "Cicéron";

        if (this.textContent == "C") {
          pp.textContent = "Bonne réponse";
          pp.style.background = "green";
        } else {
          pp.textContent = "Mauvaise reponse TU EST NUL ! NUUUUUL §§§§§";
          pp.style.background = "black";
          pp.style.color = "red";
        }
      }
    });
  });
});
