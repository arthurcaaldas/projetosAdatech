// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = [];
let impares = [];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] % 2 === 0) {
    pares[pares.length] = lista[i];
  } else {
    impares[impares.length] = lista[i];
  }
}

console.log("Números pares: ", pares);
console.log("Números ímpares: ", impares);