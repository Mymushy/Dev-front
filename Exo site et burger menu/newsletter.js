//Ce script gère la récupération de l'email et l'affichage d'une notification

//Défini dans une variable constante "inputElement" : Cherche dans le document l'ID user-email
const inputElement = document.getElementById("user-email");
// On récupère le champ où l'utilisateur tape son adresse email

//Défini dans une variable constante "inputElement" : Cherche dans le document l'ID submit
const submitElement = document.getElementById("submit-input");
// On récupère le bouton permettant d'envoyer le formulaire

const emailNotificationElement = document.getElementById("email-notification");
// On récupère la zone où sera affichée le message de confirmation

// Fonction déclenchée lorsqu'on clique sur le bouton d’envoi
//Création d'une fonction emailSubmit
function emailSubmit(event) {
  //Récuperer la valeur que l'utilisateur a mis dans le champ email

  event.preventDefault(); //Permet de stopper l'envoi du formulaire
  // Empêche le formulaire de se recharger automatiquement

  const userEmail = inputElement.value; //Stocker l'email dans une variable
  // On récupère l’email tapé par l'utilisateur

  const message = `<p>Merci pour votre inscription, nous allons envoyer la newsletter à l'adresse : ${userEmail}<p>`;
  // On prépare le texte qui sera affiché dans la notification

  emailNotificationElement.innerHTML = message;
  // On insère le message dans la zone prévue

  emailNotificationElement.style.display = "block";
  // On rend la notification visible à l'écran

  emailNotificationElement.animate(
    [
      { left: "20%" }, // Position de départ
      { left: "33%" }, // Position d'arrivée
    ],
    {
      duration: 200, // Durée de l'animation en millisecondes
      fill: "forwards", // Garde la position finale après l'animation
    }
  );
  // On déclenche une animation de déplacement horizontal de la notification

  // emailNotificationElement.animate(
  //     {
  //       left: "40px",
  //     },
  //     {
  //       duration: 2000,
  //       fill: "forwards",
  //     },
  //     600
  //   );
  // }

  // Délai de 5 secondes avant de masquer la notification
  setTimeout(() => {
    emailNotificationElement.style.display = "none";
  }, 3000);
}

// Quand l'utilisateur clique sur le bouton, on lance la fonction emailSubmit
//Au clic du bouton submit, récuperer l'adresse email de l'utilisateur
// A la variable submitElement, ajouter un écouteur d'evenement de type "click"
submitElement.addEventListener("click", emailSubmit);
