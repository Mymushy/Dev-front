// 1 - Récupérer les références des éléments nécessaires
// 2 - Créer une fonction menuToggle (avec rien dedans pour l'instant)
// 3 - Attacher un écouteur dévènement clock sur le menu mobile qui déclenche menuToggle
// 4 - Au clic, la fonction menuToggle doit ajouter la classe menu-open
// Regarder du côté de element.classList.toggle('ma classe')
// 5 - Déclencher une animation

const menuMobileBtn = document.getElementById("menu-mobile");
const headerTop = document.getElementById("header-top");

//…
function menuToggle() {
  menuMobileBtn.classList.toggle("menu-open");
  headerTop.classList.toggle("header-top-open");
}

menuMobileBtn.addEventListener("click", menuToggle);
