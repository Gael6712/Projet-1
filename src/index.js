/**
 * Auteur : AURY Gaêl
 *   Projet FIVES
 */

/*   NAVIGATION   */
<<<<<<< HEAD
/*=======================================================*/
const screen = {
  small: 0,
  medium: 400,
  large: 768,
};
window.addEventListener("resize", resizeHandler);
function resizeHandler() {
  // get window width
  const iw = window.innerWidth;

  // determine named size
  let size = null;
  for (let s in screen) {
    if (iw >= screen[s]) size = s;
  }

  console.log(size);
}
=======
>>>>>>> parent of f827441 ( MERDE)
/*=======================================================*/
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");

    /*   ANIMATION   */
    /*=======================================================*/
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

<<<<<<< HEAD
// FROM
/*=================================================*/

let modalBtn = [...document.querySelectorAll(".buttonContact")];
modalBtn.forEach((btn) => {
  btn.onclick = () => {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

let closeBtn = [...document.querySelectorAll(".close")];
closeBtn.forEach((btn) => {
  btn.onclick = () => {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

/*======================================================================================================================================*/
/*============== Partie About de Raf =============*/
=======
//   if (window.pageYOffset > 0) {
//     mainNav.classList.add("is-sticky");
//   } else {
//     mainNav.classList.remove("is-sticky");
//   }
// });
<<<<<<< HEAD
>>>>>>> parent of f827441 ( MERDE)

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
=======
>>>>>>> parent of 0b66b56 (Added about.html aboutstyle.css code in index.js et une image ligth.png)
