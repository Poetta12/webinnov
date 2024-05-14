/*
 *╔========================================╗
 *║                                        ║
 *║               BURGER BTN               ║
 *║                                        ║
 *╚========================================╝
 */
// let nav = document.querySelector("nav");
// let burger = document.getElementById("burger-menu");

// burger.onclick = function () {
// 	if (nav.classList.contains("hidden")) {
// 		spinIn();
// 		navIn();
// 	} else {
// 		spinOut();
// 		navOut();
// 	}
// };
/*
 *╔========================================╗
 *║                                        ║
 *║          BURGER BTN ANIMATION          ║
 *║                                        ║
 *╚========================================╝
 */
// function spinIn(){
//     burger.classList.add("spin-in")
//     setTimeout(() => {
//         burger.classList.remove("spin-in")
//         burger.textContent = "X"
//         burger.classList.add("x-out")
//         burger.classList.remove("icon-paragraph-left")
//     }, 2000);
// }
// function spinOut(){
//     burger.classList.add("spin-out")
//     setTimeout(() => {
//         burger.textContent = ""
//         burger.classList.remove("spin-out")
//         burger.classList.remove("x-out")
//         burger.classList.add("icon-paragraph-left")
//     }, 2000)
// }
/*
 *╔========================================╗
 *║                                        ║
 *║             NAV ANIMATION              ║
 *║                                        ║
 *╚========================================╝
 */
// function navIn(){
//     nav.classList.remove("hidden")
//     nav.classList.add("burgerin")
//     nav.classList.remove("burgerout")
// }
// function navOut(){
//     nav.classList.remove("burgerin")
//     nav.classList.add("burgerout")
//     setTimeout(() => {
//         nav.classList.add("hidden")
//     }, 2000);
// }
/*
 *╔========================================╗
 *║                                        ║
 *║             BANNER SCROLL              ║
 *║                                        ║
 *╚========================================╝
 */

window.onscroll = function () {
	if (document.getElementById("bandeau") != null) {
		document.getElementById("bandeau").style.opacity = 1 - window.pageYOffset / bandeau.offsetHeight;
	}
};

/*
 *╔========================================╗
 *║                                        ║
 *║           INDEX ABOUT ANIMATION        ║
 *║                 w/ SCROLL              ║
 *╚========================================╝
 */

document.addEventListener("DOMContentLoaded", function () {
	// Sélectionner un élément à observer
	const aboutSection = document.getElementById("about");
	const texte1 = document.getElementById("texte1");
	const texte2 = document.getElementById("texte2");

	// Créer une fonction pour vérifier si l'élément est dans la vue
	const isInViewport = function (texte1) {
		const rect = texte1.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};

	// Ajouter un gestionnaire d'événement de défilement pour vérifier lorsque l'élément entre dans la vue
	window.addEventListener("scroll", function () {
		if (isInViewport(aboutSection)) {
			// Ajouter la classe d'animation lorsque la section "about" entre dans la vue
			texte1.classList.add("slide-in");
			texte2.classList.add("slide-out");
		}
	});
});

/*
 *╔========================================╗
 *║                                        ║
 *║           LIGHT / DARK SWITCH          ║
 *║                                        ║
 *╚========================================╝
 */

document.addEventListener("DOMContentLoaded", function () {
	let checkbox = document.getElementById("dark");
	let stylesheet = document.getElementById("stylesheet");

	console.log(checkbox.checked);

	checkbox.addEventListener("change", function () {
		if (checkbox.checked) stylesheet.href = "css/dark-mode.css"; // Si la case est cochée, charger dark-mode.css
		else stylesheet.href = "css/style.css"; // Sinon, charger style.css
	});
});
