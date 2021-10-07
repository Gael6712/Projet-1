/**
 * Auteur : AURY Gaêl
 *   Projet FIVES
 */

/*   NAVIGATION   */
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

/* Overlay - Scroll */
/*=======================================================*/
window.onscroll = function () {
  if (
    document.documentElement.scrollTop - goIn.offsetHeight < goIn.offsetTop &&
    document.documentElement.scrollTop + goIn.offsetHeight * 1 > goIn.offsetTop
  ) {
    goIn.style.cssText = "transform:scale(1);  opacity:1;  transition:1s";
  } else {
    goIn.style.cssText = "transform:scale(0);  opacity:0;  ;transition:1s";
  }
};

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

let btn = document.getElementById("btn");
let light = document.getElementById("light");
let brightness = document.getElementsByClassName(".presentation");
console.log(brightness);
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
