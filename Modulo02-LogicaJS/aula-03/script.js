// FOR

// for (let i = 0; i < array.length; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   let tabuada = i + ' x ' + 5 + ' = ' + i * 5;

//   console.log(tabuada);
// }

// FOR IN - usado para objetos

// const alunos = [
//   {nome: "Joao", idade: 12},
//   {nome: "Carlos", idade: 24},
//   {nome: "Andre", idade: 21},
//   {nome: "Diogo", idade: 25},
//   {nome: "Pedro", idade: 30},
//   {nome: "Williams", idade: 17},
// ]

// for (const i in alunos) {
//   console.log(`${alunos[i].nome} tem ${alunos[i].idade}`);
    
// }

// FOR OF - usado para pecorrer objetos, array, map...

const alunos = [
  {nome: "Joao", idade: 12},
  {nome: "Carlos", idade: 24},
  {nome: "Andre", idade: 21},
  {nome: "Diogo", idade: 25},
  {nome: "Pedro", idade: 30},
  {nome: "Williams", idade: 17},
]

for (const aluno of alunos) {
  console.log(`${aluno.nome} tem ${aluno.idade} anos`)
}

for (const {nome, idade}of alunos) {
  console.log(`${nome} tem ${idade} anos`)
}