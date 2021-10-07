/**
 * Auteur : AURY Gaêl
 *   Projet FIVES
 */

class UserCard {
  constructor(imgUser, skill, contenueUser, fullName) {
    this.imgUser = imgUser;
    this.fullName = fullName;
    this.skill = skill;
    this.contenueUser = contenueUser;
  }
  user() {
    return `${this.fullName} ${this.skill} ${this.contenueUser}`;
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

const arrayUser = [user1, user2, user3];

function generateUser(users) {
  const userCard = document.createElement("div");
  userCard.className = "userCard";

  const divInnerCard = document.createElement("div");
  divInnerCard.className = "imgUser innerCard";

  const divContentCard = document.createElement("div");
  divContentCard.className = "contentCard";

  const divParent = document.getElementById("containSlide");

  userCard.appendChild(divInnerCard);
  userCard.appendChild(divContentCard);
  divParent.appendChild(userCard);
}
for (let i = 0; i < arrayUser.length; i++) {
  generateUser(arrayUser[i]);
}

//   <div class="imgUser innerCard"></div>
//   <div class="contentCard"></div>

console.log(user1.user());
console.log(user2.user());
console.log(user3.user());

// Pour chaque utilisateur, Créer une div.
