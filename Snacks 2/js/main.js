// dichiaro una lista di nomi
const names = ["Mattia", "Matteo", "Erik", "Davide"];

// dichiaro una lista di cognomi
const surnames = ["Dalbon", "Pizzamiglio", "Lorenzi", "Sbampato"];

// dichiaro una lista di finti invitati
const fakeInvited = [];

// dichiaro numero falsi invitati
const numberFakeInvited = prompt("Quanti invitati vuoi generare?");

// finchè non ho abbastanza nomi e cognomi
for (let i = 0; i < numberFakeInvited; i++) {
  // genero un indice casuale nel range dell'array dei nomi
  const nameRandomIndex = Math.floor(Math.random() * names.length);

  // recuro un valore casuale dall'array dei nomi usando l'indice generato
  const randomName = names[nameRandomIndex];

  // genero un indice casuale nel range dell'array dei cognomi
  const surnameRandomIndex = Math.floor(Math.random() * surnames.length);

  // recuro un valore casuale dall'array dei cognomi usando l'indice generato
  const randomSurname = surnames[surnameRandomIndex];

  // concateno nome e cognome e lo pusho nell'array degli invitati
  const fakeGuest = randomName + " " + randomSurname;
  fakeInvited.push(fakeGuest);
}

// stampo l'array dei finti invitati
console.table(fakeInvited);
