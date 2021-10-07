/**
 * 05/10/2021
 * Jimmy JUNG
 * Search function
 */

/*CREATION DES PROFILS*/

const userCards = [
  {
    nom: "Carter",
    prenom: "Jimmy",
    poste: "Développeur Fullstack",
    localisation: "Washington",
    skills: [
      { skill: "HTML5", level: "5" },
      { skill: "CSS3", level: "4" },
      { skill: "Javascript", level: "5" },
      { skill: "Design UX/UI", level: "3" },
      { skill: "Anglais", level: "3" },
    ],
    picture: "./src/img/profile_picture.jpg",
    url: "presentation_jimmy.html",
  },
  {
    nom: "Aury",
    prenom: "Gaël",
    poste: "Développeur Fullstack",
    localisation: "Toulouse",
    skills: [
      { skill: "HTML5", level: "5" },
      { skill: "CSS3", level: "5" },
      { skill: "Javascript", level: "5" },
      { skill: "Design UX/UI", level: "5" },
      { skill: "Anglais", level: "5" },
    ],
    picture: "./src/img/profile_picture.jpg",
    url: "#",
  },
  {
    nom: "Dubois",
    prenom: "Rafael",
    poste: "Développeur Front-end",
    localisation: "Strasbourg",
    skills: [
      { skill: "HTML5", level: "5" },
      { skill: "CSS3", level: "5" },
      { skill: "Javascript", level: "5" },
      { skill: "Design UX/UI", level: "5" },
      { skill: "Anglais", level: "5" },
    ],
    picture: "./src/img/profile_picture.jpg",
    url: "#",
  },
  {
    nom: "Sérapion",
    prenom: "Fabrice",
    poste: "Intégrateur",
    localisation: "Belfort",
    skills: [
      { skill: "HTML5", level: "5" },
      { skill: "CSS3", level: "5" },
      { skill: "Javascript", level: "5" },
      { skill: "Design UX/UI", level: "5" },
      { skill: "Anglais", level: "5" },
    ],
    picture: "./src/img/profile_picture.jpg",
    url: "#",
  },
  {
    nom: "Kheloufi",
    prenom: "Oualid",
    poste: "Développeur Fullstack",
    localisation: "Paris",
    skills: [
      { skill: "HTML5", level: "5" },
      { skill: "CSS3", level: "5" },
      { skill: "Javascript", level: "5" },
      { skill: "Design UX/UI", level: "5" },
      { skill: "Anglais", level: "5" },
    ],
    picture: "./src/img/profile_picture.jpg",
    url: "#",
  },
];

const sectionCard = document.getElementById("Users");
const userInput = document.getElementById("rechercher");

const userPoste = document.getElementById("poste");
const userLoc = document.getElementById("localisation");

/*CREATION DES CARTES*/

function displayAllUserCards(cards) {
  const render = cards
    .map((card) => {
      return `
      
  <a href="${card.url}">
    <article class="UserCard" id="cardUser">
    <img class="UserImg" src="${card.picture}" alt="">
    <header class="NameUser">${card.nom} - ${card.prenom}</header>
    <div class="content">
      <h5>${card.poste}</h5>
      <h6>${card.localisation}</c>
      <ul>
        <li>Compétences :</li>
        ${getSkills(card.skills)}
      </ul>
    </div>
  </article>
  </a>`;
    })
    .join("");
  sectionCard.innerHTML = render;
}

/*AJOUT DES COMPETENCES DANS LES CARTES*/

function getSkills(userSkills) {
  const render = userSkills
    .map((user) => {
      return `<li>${user.skill} : ${getStars(user.level)}</li>`;
    })
    .join("");
  return render;
}

/*AJOUT DES ETOILES DANS LES COMPETENCES*/

function getStars(amount) {
  let stars = "";
  for (let i = 0; i < amount; i++) {
    stars += "&#9733";
  }
  return stars;
}

/*RECHERCHE PAR POSTE*/

userPoste.addEventListener("change", (e) => {
  if (e.target.value != "Poste occupé") {
    const userCardFilter = userCards.filter((user) => {
      const emploi = user.poste.toLowerCase();

      return emploi == e.target.value.toLowerCase();
    });
    displayAllUserCards(userCardFilter);
  } else {
    displayAllUserCards(userCards);
  }
});

displayAllUserCards(userCards);

/*RECHERCHE PAR LOCALISATION*/

userLoc.addEventListener("keyup", (e) => {
  const loc = e.target.value.toLowerCase();

  if (loc != "") {
    const userCardFilter = userCards.filter((user) => {
      const localisation = user.localisation.toLowerCase();

      return loc == localisation;
    });
    displayAllUserCards(userCardFilter);
  } else {
    displayAllUserCards(userCards);
  }
});

displayAllUserCards(userCards);

/*RECHERCHE PAR NOM PRENOM*/

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
