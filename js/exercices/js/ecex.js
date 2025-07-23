let clic = document.querySelector("#clickMe");

clic.addEventListener("click", function () {
  alert("esque c'est bon pour vous ?");
});

let zontext = document.querySelector("#zoneTexte");

zontext.addEventListener("keydown", function (event) {
  console.log("Touche pressée : " + event.key);
});

let care = document.querySelector("#carre");

care.addEventListener("click", function () {
  console.log(this.style.background);
  if (this.style.background == "grey") {
    this.style.background = "yellow";
  } else {
    this.style.background = "grey";
  }
});

let bouton = document.querySelectorAll('button');

bouton.forEach(bouton => {
    bouton.addEventListener('click',function (){
        console.log('tu as cliqué sur ' + bouton.id);
    })
})

let forme = document.querySelector('#formulaire');

forme.addEventListener('submit',function (event) {
    event.preventDefault();
    console.log("formulaire intercepté ASKIP jsuis pas sur");
})

let houver = document.querySelector('#survol')

houver.addEventListener('mouseover',function (){
    houver.textContent = "Coucou"
})
houver.addEventListener('mouseout',function (){
    houver.textContent = "tu pars déja ? :'("
})

let opt = document.querySelectorAll('.option')

opt.forEach(opt => {
    opt.addEventListener('click',function (e){
        console.log(e.target.textContent);
    })
})

let couleur= document.querySelector('#bonus');
 
function couleurInfini(){
 
let rgb = [Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255)];
 
    return rgb;
}
 
let codergb;
 
couleur.addEventListener('mouseover',function(){
      codergb = couleurInfini();  
      couleur.style.backgroundColor= `rgb(${codergb[0]},${codergb[1]},${codergb[2]})`;
    });
couleur.addEventListener('mouseout',function(){
    codergb = couleurInfini();
    couleur.style.backgroundColor= `rgb(${codergb[0]},${codergb[1]},${codergb[2]})`;
}) ;