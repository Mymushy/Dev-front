// Demande un premier nombre au user
let numberA = prompt("Entrez un premier nombre");
// Affiche ce que le user a entré
console.log(numberA);

// Demande un second nombre
let numberB = prompt("Entrez un second nombre");
// Affiche la valeur entrée
console.log(numberB);

// Demande l'opérateur arithmétique
let numberC = prompt("Entrez un opérateur arithmètique");
// Affiche l'opérateur
console.log(numberC);

// Convertit les valeurs saisies en nombres
numberA = Number(numberA);
numberB = Number(numberB);

// Variable qui stockera le résultat
let result;

// Teste si l'opérateur est +
if (numberC === "+") {
  result = numberA + numberB; // Addition

  // Teste si l'opérateur est -
} else if (numberC === "-") {
  result = numberA - numberB; // Soustraction

  // Teste si l'opérateur est *
} else if (numberC === "*") {
  result = numberA * numberB; // Multiplication

  // Teste si l'opérateur est /
} else if (numberC === "/") {
  if (numberB === 0) {
    alert("Erreur : division par zéro !"); // Message d’erreur
  } else {
    result = numberA / numberB; // Division
  }

  // Si l'opérateur n'est pas reconnu
} else {
  alert("Opérateur non reconnu !");
}

// Si un résultat existe, on l’affiche
if (result !== undefined) {
  console.log("Résultat :", result); // Affiche dans la console
  alert("Résultat : " + result); // Affiche dans une pop-up
}
