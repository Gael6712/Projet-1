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
