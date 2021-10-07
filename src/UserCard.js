/**
 * Auteur : AURY Gaêl
 *   Projet FIVES
 */

class UserCard {
  constructor(imgUser, fullName, skill, userContent) {
    this.imgUser = imgUser;
    this.fullName = fullName;
    this.skill = skill;
    this.userContent = userContent;
  }
  user() {
    return `${this.imgUser} ${this.fullName} ${this.skill} ${this.userContent}`;
  }
}

const user1 = new UserCard(
  "https://us.123rf.com/450wm/fizkes/fizkes1904/fizkes190400933/121256725-head-shot-portrait-of-smiling-businessman-d-%C3%A2ge-moyen-assis-au-bureau-%C3%A0-la-recherche-%C3%A0-huis-clos-dir.jpg?ver=6",
  "AURY Gaël",
  "Expert UX - développeur JS",
  "Développeur expérimenté et spécialiser en prototypages et maquettes"
);

const user2 = new UserCard(
  "https://us.123rf.com/450wm/fizkes/fizkes1904/fizkes190400933/121256725-head-shot-portrait-of-smiling-businessman-d-%C3%A2ge-moyen-assis-au-bureau-%C3%A0-la-recherche-%C3%A0-huis-clos-dir.jpg?ver=6",
  "Jimmy",
  "Expert UX - développeur JS",
  "Développeur expérimenté et spécialiser en prototypages et maquettes"
);

const user3 = new UserCard(
  "https://us.123rf.com/450wm/fizkes/fizkes1904/fizkes190400933/121256725-head-shot-portrait-of-smiling-businessman-d-%C3%A2ge-moyen-assis-au-bureau-%C3%A0-la-recherche-%C3%A0-huis-clos-dir.jpg?ver=6",
  "Raph",
  "Expert UX - développeur JS",
  "Développeur expérimenté et spécialiser en prototypages et maquettes"
);
const cardsBackground = document.querySelector(".cards");
let arrayUser = [user1, user2, user3];

function generateUser() {
  arrayUser.forEach((user) => {
    const cards = document.createElement("div");
    cards.className = "cards";

    const card = document.createElement("div");
    card.className = "card";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardImg = document.createElement("img");
    cardImg.className = "card-img";
    cardImg.src = user.imgUser;

    const userName = document.createElement("h5");
    userName.getElementsByTagName = "h5";
    userName.innerText = user.fullName;

    const userSkill = document.createElement("h6");
    userSkill.getElementsByTagName = "h6";
    userSkill.innerText = user.skill;

    const userTxt = document.createElement("p");
    userTxt.className = "p";
    userTxt.innerText = user.userContent;

    const btn = document.createElement("button");
    btn.className = "btn-card";
    btn.innerText = "Message";

    cards.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardImg);
    cardBody.appendChild(userName);
    cardBody.appendChild(userSkill);
    cardBody.appendChild(userTxt);
    cardBody.appendChild(btn);
    cardsBackground.appendChild(card);

    /*
   <div class="card">
  <div class="card-body">
    <div class="card-img"></div>
    <h5>AURY Gaël</h5>
    <h6>Expert - UX / React.js</h6>
    <p>Dévelopeur Front-end, spécialisé UX</p>
    <button class="card-button">Message</button>
  </div>
</div>
*/
  });
}

generateUser();
