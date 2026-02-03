let userName = "John";
let userAge = prompt("Quel est votre âge ?");
let userHobbies = ["Tennis", "Vélo", "Basket", "Cinéma", "Jeux videos"]; // Array
let userInfos = {
  //c'est un tableau/
  id: 1,
  adress: "2 rue des champs",
  genre: "Homme",
  job: "Designer",
}; // object
let isHuman = true;

console.log(userName);
console.log(userAge);
console.log(userHobbies[3]); // préciser le crochet va indiquer la valeur que l'on veut prendre
console.log(userInfos);
console.log(userInfos.adress);

if (userAge < 18) {
  alert("Vous n'êtes pas majeur !!!");
} else if (Number(userAge) === 25) {
  alert("Vous avez l'âge parfait !!!");
} else {
  alert("Vous êtes majeur !!!");
}
