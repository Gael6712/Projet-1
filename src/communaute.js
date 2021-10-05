const userCard = document.querySelectorAll(".UserCard");

for (let i = 0; i < userCard.length; i++) {
  userCard[i].addEventListener("mouseover", function (event) {
    event.preventDefault();
    userCard[i].style.boxShadow = "5px 5px 15px 5px #000000";
  });
}

for (let i = 0; i < userCard.length; i++) {
  userCard[i].addEventListener("mouseleave", function (event) {
    event.preventDefault();
    userCard[i].style.boxShadow = "";
  });
}

function changeText(event) {
  document.querySelector(".ButtonOrange").innerText = "Allez viens !";
}

document
  .querySelector(".ButtonOrange")
  .addEventListener("mouseover", changeText);

// const logo = document.querySelector(".logo");

// logo.addEventListener("mouseover", function (event) {
//   event.preventDefault();
//   event.logo.style.color = "red";
// });

/**
 * 05/10/2021
 * Jimmy JUNG
 * Search function
 */

const userCards = [
  {
    nom: "Carter",
    prenom: "Jimmy",
    poste: "Développeur Fullstack",
    skills: [
      { skill: "HTML5", level: "5" },
      { skill: "CSS3", level: "4" },
      { skill: "Javascript", level: "5" },
      { skill: "Design UX/UI", level: "3" },
      { skill: "Anglais", level: "3" },
    ],
    picture: "./src/img/profile_picture.jpg",
  },
  {
    nom: "Aury",
    prenom: "Gaël",
    poste: "Développeur Fullstack",
    skills: [
      { skill: "HTML5", level: "5" },
      { skill: "CSS3", level: "5" },
      { skill: "Javascript", level: "5" },
      { skill: "Design UX/UI", level: "5" },
      { skill: "Anglais", level: "5" },
    ],
    picture: "./src/img/profile_picture.jpg",
  },
  {
    nom: "Dubois",
    prenom: "Rafael",
    poste: "Développeur Fullstack",
    skills: [
      { skill: "HTML5", level: "5" },
      { skill: "CSS3", level: "5" },
      { skill: "Javascript", level: "5" },
      { skill: "Design UX/UI", level: "5" },
      { skill: "Anglais", level: "5" },
    ],
    picture: "./src/img/profile_picture.jpg",
  },
  {
    nom: "Serapion",
    prenom: "Fabrice",
    poste: "Développeur Fullstack",
    skills: [
      { skill: "HTML5", level: "5" },
      { skill: "CSS3", level: "5" },
      { skill: "Javascript", level: "5" },
      { skill: "Design UX/UI", level: "5" },
      { skill: "Anglais", level: "5" },
    ],
    picture: "./src/img/profile_picture.jpg",
  },
  {
    nom: "Kheloufi",
    prenom: "Oualid",
    poste: "Développeur Fullstack",
    skills: [
      { skill: "HTML5", level: "5" },
      { skill: "CSS3", level: "5" },
      { skill: "Javascript", level: "5" },
      { skill: "Design UX/UI", level: "5" },
      { skill: "Anglais", level: "5" },
    ],
    picture: "./src/img/profile_picture.jpg",
  },
];

const sectionCard = document.getElementById("Users");
const userInput = document.getElementById("rechercher");

function displayAllUserCards(cards) {
  const render = cards
    .map((card) => {
      return `<article class="UserCard">
    <img class="UserImg" src="${card.picture}" alt="">
    <header class="NameUser">${card.nom} - ${card.prenom}</header>
    <div class="content">
      <p>${card.poste}</p>
      <ul>
        <li>Compétences :</li>
        ${getSkills(card.skills)}
      </ul>
    </div>
  </article>`;
    })
    .join("");
  sectionCard.innerHTML = render;
}

function getSkills(userSkills) {
  const render = userSkills
    .map((user) => {
      return `<li>${user.skill} : ${getStars(user.level)}</li>`;
    })
    .join("");
  return render;
}

function getStars(amount) {
  let stars = "";
  for (let i = 0; i < amount; i++) {
    stars += "&#9733";
  }
  return stars;
}

userInput.addEventListener("keyup", (e) => {
  const userInput = e.target.value.toLowerCase();

  if (userInput != "") {
    const userCardFilter = userCards.filter((user) => {
      const nom = user.nom.toLowerCase();
      const prenom = user.prenom.toLowerCase();

      return nom == userInput || prenom == userInput;
    });
    displayAllUserCards(userCardFilter);
  } else {
    displayAllUserCards(userCards);
  }
});

displayAllUserCards(userCards);
