// Objectif : L'utilisateur doit deviner un nombre mystère entre 1 et 100 en 7 tentatives maximum.

// Fonctionnalités attendues :
// 1. Générer un nombre mystère aléatoire entre 1 et 100 au début du jeu.
// Générer le nombre aléatoire : Math.floor(Math.random() * MAX_NUMBER) + 1;
// 2. Vérifier que l'utilisateur entre un nombre valide (entre 1 et 100).
// 3. Comparer la proposition de l'utilisateur avec le nombre mystère et afficher un indice :
//     -  "Trop haut !" si le nombre est supérieur.
//     -  "Trop bas !" si le nombre est inférieur.
//     -  "Félicitations !" si le nombre est correct.
//  4. Mettre à jour et afficher le nombre de tentatives restantes.
//  5. Gérer la fin du jeu :
//     - Si l'utilisateur trouve le nombre, désactiver la saisie.
//     - Si toutes les tentatives sont utilisées, afficher le nombre mystère et désactiver la saisie.
//  6. Permettre de recommencer une partie avec un bouton "Recommencer".

//  Game configuration
//  DOM Elements
//  Game variables
//  Main function to check the answer
//  Function to restart the game
//  Event listeners
//  Start the game

//Game configuration

// constantes
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
let remaining_tries = 7;

// game variables
let guessNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
console.log(guessNumber);

// DOM elements
const guessNumberInputElement = document.getElementById("guess-number-input");
const guessNumberBtnElement = document.getElementById("guess-number-btn");
const messageElement = document.getElementById("message");
const triesElement = document.getElementById("tries");
const restartBtnElement = document.getElementById("restart-btn");
restartBtnElement.style.display = "none";

function checkAnswer(event) {
  event.preventDefault();

  if (remaining_tries < 1) {
    messageElement.innerHTML = "C'est perdu !";
    restartBtnElement.style.display = "block";
    return;
  }

  const userNumber = Number(guessNumberInputElement.value);

  if (userNumber > guessNumber) {
    messageElement.innerHTML = "C'est trop haut !";
    remaining_tries--;
  } else if (userNumber < guessNumber) {
    messageElement.innerHTML = "C'est trop bas !";
    remaining_tries--;
  } else if (userNumber === guessNumber) {
    messageElement.innerHTML = "Félicitations sur à trouver le Nombre Mystère";
  } else {
    alert("Erreur");
  }
  triesElement.innerHTML = remaining_tries;
}
function restartGame() {
  messageElement.innerHTML = "";
  remaining_tries = 7;
  triesElement.innerHTML = remaining_tries;
  restartBtnElement.style.display = "none";
}

guessNumberBtnElement.addEventListener("click", checkAnswer);
restartBtnElement.addEventListener("click", restartGame);
