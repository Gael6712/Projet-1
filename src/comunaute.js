const userCard = document.querySelectorAll(".UserCard");

for (let i = 0; i < userCard.length; i++) {
  userCard[i].addEventListener("mouseover", function (event) {
    event.preventDefault();
    userCard[i].style.boxShadow = "5px 5px 15px 5px #000000";
  });
}

const orangeButton = document.querySelector(".ButtonOrange");

orangeButton.addEventListener("mouseover", function (event) {
  event.preventDefault();
  event.orangeButton.textContent = "Allez viens !";
});

const logo = document.querySelector(".logo");

logo.addEventListener("mouseover", function (event) {
  event.preventDefault();
  event.logo.style.color = "red";
});
