/*   NAVIGATION   */
/*=======================================================*/
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");

    /*   ANIMATION   */
    navLinks.forEach((link, index) => {
      link.style.animation = `navLink 0.8s ease forwards ${index / 4}s`; // On divise la transition par 4
    });
  });
};
console.log(window);
navSlide();
/*   ANIMATION BURGER  */

// /*   STICKY   */
// window.addEventListener("scroll", function () {
//   let mainNav = document.querySelector("#mainNav");

//   if (window.pageYOffset > 0) {
//     mainNav.classList.add("is-sticky");
//   } else {
//     mainNav.classList.remove("is-sticky");
//   }
// });

/*============== Partie About de Raf =============*/
let btn = document.getElementById("btn");
let light = document.getElementById("light");
let brightness = document.getElementsByClassName(".presentation")
console.log(brightness)
function toggleBtn() {
  btn.classList.toggle("active");
  light.classList.toggle("on");
  brightness.classList.toggle("brightness");
}

var text = document.getElementById("text");
var splitText = text.innerText.split("");

text.innerHTML = "";
i = 0;
setInterval(function () {
  AjoutDeLettre();
}, 100);

function AjoutDeLettre() {
  if (i < splitText.length) {
    text.innerHTML += splitText[i];
    i++;
  }
}