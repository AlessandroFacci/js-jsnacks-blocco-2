// creo un array di numeri interi
const numbers = [2, 5, 7, 8, 3, 6, 10];

// dichiaro una variabile somma = 0
let sum = 0;

// per ogni numero dell'array
for (let i = 0; i < numbers.length; i++) {
  // recupero il numero correntemente iterato
  const currentNumber = numbers[i];

  // se è in posizione dispari
  if (i % 2 != 0) {
    // lo aggiungo alla variabile somma
    sum += currentNumber;
  }
}
// stampo la somma
console.log("somma: " + sum);
