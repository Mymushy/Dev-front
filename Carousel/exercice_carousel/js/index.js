const testimonials = [
  {
    name: "Alice",
    message: "Ceci est un super témoignage à propos de votre entreprise !"
  },
  {
    name: "Bob",
    message: "Je suis extrêmement satisfait des services que votre entreprise offre. Merci !"
  },
  {
    name: "Charlie",
    message: "Votre équipe a fait un travail exceptionnel. Je recommande vivement vos services !"
  },
  {
    name: "Eva",
    message: "Je suis impressionnée par la qualité de votre produit. Continuez votre excellent travail !"
  },
  {
    name: "Frank",
    message: "Votre entreprise a dépassé mes attentes. Je suis ravi d'avoir choisi de travailler avec vous."
  }
];
console.log("test", testimonials[0].message)

let testimonialsCounter = 0;

const messageElement = document.querySelector("#section-testimonials h3");
const nameElement = document.querySelector("#section-testimonials small")
const prevBtnElement = document.getElementById("testimonials-prev-btn");
const nextBtnElement = document.getElementById("testimonials-next-btn");


function updateTesti() {
    const nbrActu = testimonials[testimonialsCounter];
    messageElement.textContent = nbrActu.message;
    nameElement.textContent = nbrActu.name;
}

function prevTesti() {
    testimonialsCounter--;

    if (testimonialsCounter < 0) {
    testimonialsCounter = testimonials.length - 1;
  }
   updateTesti()
}

function nextTesti() {
    testimonialsCounter++;

    if (testimonialsCounter >= testimonials.length) {
    testimonialsCounter = 0;
  }
   updateTesti()
}

prevBtnElement.addEventListener("click", prevTesti);
nextBtnElement.addEventListener("click", nextTesti);


