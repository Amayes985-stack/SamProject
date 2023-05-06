const stat = document.querySelectorAll(".stats");
const fields = document.querySelectorAll(".fields h1");

const menuOptions = document.querySelectorAll(".menuOptions");
const title = document.querySelectorAll(".menuOptions h1");
console.log(title.length);

stat[0].classList.add("caché");

for (let i = 0; i < menuOptions.length; i++) {
  (function (index) {
    menuOptions[index].addEventListener("click", () => {
      if (index == 0) {
        for (let a = 0; a < fields.length; a++) {
          fields[a].classList.add("caché");
        }
      } else {
        for (let a = 0; a < fields.length; a++) {
          fields[a].classList.remove("caché");
        }
      }
      menuOptions[index].classList.add("menuOptionsClick");
      if (index != 2) {
        stat[index].classList.remove("caché");
        for (let j = 0; j < menuOptions.length; j++) {
          if (j != index) {
            menuOptions[j].classList.remove("menuOptionsClick");
            title[j].classList.remove("titleClick");
            stat[j].classList.add("caché");
          }
        }
      } else {
        stat[1].classList.remove("caché");
        for (let j = 0; j < menuOptions.length; j++) {
          if (j != 1) {
            menuOptions[j].classList.remove("menuOptionsClick");
            title[j].classList.remove("titleClick");
            stat[j].classList.add("caché");
          }
        }
      }

      if (menuOptions[index].classList.contains("menuOptionsClick")) {
        title[index].classList.add("titleClick");
      }
    });
  })(i);
}

for (let i = 0; i < menuOptions.length; i++) {
  if (menuOptions[i].classList.contains("menuOptionsClick")) {
    title[i].classList.add("titleClick");
  }
}

const abonnement = document.querySelectorAll(".abonnement");

abonnement[0].classList.add("caché");
abonnement[1].classList.add("caché");

for (let m = 0; m < fields.length; m++) {
  fields[m].addEventListener("click", () => {
    console.log("cliqué");
    for (let j = 0; j < abonnement.length; j++) {
      if (j !== m) {
        abonnement[j].classList.add("caché");
      }
      if (abonnement[m].classList.contains("caché")) {
        abonnement[m].classList.remove("caché");
      }
    }
  });
}

const insertSubscriptionStatus = () => {
  const abonnements = document.querySelectorAll(".abonnement");
  const table = document.querySelector(".table");

  abonnements.forEach((abonnement) => {
    const nom = abonnement.querySelector(".nom").innerText;
    const statut = abonnement.querySelector(".statut").innerText;

    const row = document.createElement("tr");
    const nomCell = document.createElement("td");
    nomCell.textContent = nom;
    row.appendChild(nomCell);

    const statutCell = document.createElement("td");
    statutCell.textContent = statut;
    row.appendChild(statutCell);

    table.appendChild(row);
  });
};

const inlock = document.querySelector(".inlock");
const approuver = document.querySelector(".approuver");
const refuser = document.querySelector(".annuler");
const refusAbonnement = document.querySelector(".RefusAbonnement");

inlock.addEventListener("click", () => {
  refusAbonnement.classList.add("refusNotif");
});

approuver.addEventListener("click", () => {
  refusAbonnement.classList.remove("refusNotif");
  console.log("ohhhhhhhhhh");
});

refuser.addEventListener("click", () => {
  refusAbonnement.classList.remove("refusNotif");
});

// Appel de la fonction pour insérer les abonnements dans la table
insertSubscriptionStatus();

