/**
 * Auteur : AURY Gaêl
 *   Projet FIVES
 */

class UserCard {
  constructor(imgUser, backgroundUser, fullName, skill, userContent) {
    this.imgUser = imgUser;
    this.backgroundUser = backgroundUser;
    this.fullName = fullName;
    this.skill = skill;
    this.userContent = userContent;
  }
  user() {
    return `${this.imgUser} ${this.backgroundUser} ${this.fullName} ${this.skill} ${this.userContent}`;
  }
}

const user1 = new UserCard(
  "https://www.cjoint.com/doc/21_10/KJihB3yLKfJ_DSC-0971.jpg",
  "https://diapogram.com/upload/2018/04/11/20180411155524-0a1fb960.jpg",
  "Aury Gaël",
  "Expert UX - développeur JS",
  "Spécialiser en prototypages et maquettes web, aime les licornes"
);

const user2 = new UserCard(
  "https://lejournalminimal.fr/wp-content/uploads/2016/11/702-Official_presidential_portrait_of_Jimmy_Carter_by_Herbert_E._Abrams_1982-copie.jpg",
  "https://f.hellowork.com/helloworkplace/2014/09/expatriation-USA-1200x633.jpg",
  "Jimmy Carter",
  "Exepert Html",
  "Développeur et éleveur de poulet et président des Etats punis  !"
);

const user3 = new UserCard(
  "https://www.cjoint.com/doc/21_10/KJii4mDyTzJ_yeee.jpg",
  "https://aws.vdkimg.com/tv_show/3/7/8/6/37863_backdrop_scale_740x172.jpg",
  "Oualid Kheloufi",
  "Expert CSS - En formation",
  "Passionnée par les pokémons et les Animes"
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

    const backgroundUser = document.createElement("img");
    backgroundUser.className = "background-img";
    backgroundUser.src = user.backgroundUser;

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
    cardBody.appendChild(backgroundUser);
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
