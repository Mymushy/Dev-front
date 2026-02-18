const cartes = document.querySelectorAll(".carte");
const grille = document.querySelector(".cartes");
const boutonRejouer = document.querySelector(".rejouer");

let matchedCarte = 0;
let carteUn, carteDeux;
let disableDeck = false;
const imagesUniques = [
  "622115355_18196096123339258_345122040715632461_n.png",
  "625054594_18066378569560819_2065562622711265452_n.png",
  "626298618_18197729596339258_2713065082551727951_n.png",
  "632780444_1459659955681205_2000530480306608528_n.png",
  "Gemini_Generated_Image_93rinb93rinb93ri.png",
  "Gemini_Generated_Image_xw1ax2xw1ax2xw1a.png",
  "image (3).jpg",
  "Média (1).jpg",
  "Média (2).jpg",
  "Média (3).jpg",
  "Média (4).jpg",
  "Média (5).jpg",
  "Média (6).jpg",
  "Média (7).jpg"
];

function startGame() {
  matchedCarte = 0;
  carteUn = carteDeux = "";
  disableDeck = false;
  grille.innerHTML = ""; 

  let toutesLesCartes = imagesUniques.concat(imagesUniques);
  toutesLesCartes.sort(() => Math.random() > 0.5 ? 1 : -1);

  toutesLesCartes.forEach(imgNom => {
    const li = document.createElement("li");
    li.classList.add("carte");
    li.dataset.nom = imgNom; 
    li.innerHTML = `
      <div class="face recto"><img src="./Image/Final\ space.png" alt="dos"></div>
      <div class="face verso"><img src="./Image/${imgNom}" alt="image"></div>
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
      match();
    } else {
      unmatch();
    }
  }
}

function match() {
  matchedCarte++;
  if (matchedCarte === 14) { 
    setTimeout(() => startGame(), 1000);
  }
  carteUn.removeEventListener("click", flipCarte);
  carteDeux.removeEventListener("click", flipCarte);
  carteUn = carteDeux = "";
  disableDeck = false;
}

function unmatch() {
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
