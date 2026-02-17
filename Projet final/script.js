const cartes = document.querySelectorAll(".carte");
const grille = document.querySelector(".cartes");
const boutonRejouer = document.querySelector(".rejouer");

let matchedCarte = 0;
let carteUn, carteDeux;
let disableDeck = false;
const imagesUniques = [
  "Quokka1.jpg",
  "Quokka2.png",
  "Quokka3.jpg",
  "Quokka4.jpg",
  "Quokka5.jpg",
  "Quokka6.jpg",
  "Quokka7.jpg",
  "Quokka8.jpg",
  "Quokka9.jpg",
  "Quokka10.jpg",
  "Quokka11.jpg",
  "Quokka12.jpg",
  "Quokka13.jpg",
  "Quokka14.jpg",

];

function startGame() {
  matchedCarte = 0;
  carteUn = "";
  carteDeux = "";
  disableDeck = false;
  grille.innerHTML = ""; 

  let listeImages = [];
  for (let i = 0; i < imagesUniques.length; i++) {
    listeImages.push(imagesUniques[i]); 
    listeImages.push(imagesUniques[i]); 
  }

  listeImages.sort(() => Math.random() - 0.5);

  listeImages.forEach(imgNom => {
    const li = document.createElement("li");
    li.classList.add("carte");
    li.dataset.nom = imgNom;
    li.innerHTML = `
      <div class="face recto"><img src="./Image/Final\ space.png" alt="dos"></div>
      <div class="face verso"><img src="./Image/${imgNom}" alt="quokka"></div>
    `;
    li.addEventListener("click", flipCarte);
    grille.appendChild(li);
  });
}

function flipCarte(e) {
  let clickedCarte = e.currentTarget; 
  
  if (clickedCarte !== carteUn && !disableDeck) {
    clickedCarte.classList.add("flip");
    
    if (!carteUn) {
      return (carteUn = clickedCarte);
    }
    
    carteDeux = clickedCarte;
    disableDeck = true;
    
    if (carteUn.dataset.nom === carteDeux.dataset.nom) {
      matched();
    } else {
      unmatched();
    }
  }
}

function matched() {
  matchedCarte++;
  if (matchedCarte === imagesUniques.length) {
        setTimeout(() => {
            alert("Bravo ! Tous les Quokkas sont réunis !");
        }, 500);
    }
  carteUn.removeEventListener("click", flipCarte);
  carteDeux.removeEventListener("click", flipCarte);
  carteUn = carteDeux = "";
  disableDeck = false;
}

function unmatched() {
  setTimeout(() => {
    carteUn.classList.add("shake");
    carteDeux.classList.add("shake");
  }, 400);

  setTimeout(() => {
    carteUn.classList.remove("shake", "flip");
    carteDeux.classList.remove("shake", "flip");
    carteUn = carteDeux = "";
    disableDeck = false;
  }, 1200);
}

boutonRejouer.addEventListener("click", () => {
    startGame();
});

startGame();
