//inserisco un numero
const userNumber = parseInt(prompt("Inserisci un numero"));

//se è pari
if (userNumber % 2 == 0) {
  //stampo il numero
  console.log("Numero: " + userNumber);
}
//altrimenti
else {
  //stampa il numero successivo
  console.log("Numero: " + (userNumber + 1));
}
