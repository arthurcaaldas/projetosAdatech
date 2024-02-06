// FOR IN - usado para objetos

const alunos = [
  {nome: "Joao", idade: 12},
  {nome: "Carlos", idade: 24},
  {nome: "Andre", idade: 21},
  {nome: "Diogo", idade: 25},
  {nome: "Pedro", idade: 30},
  {nome: "Williams", idade: 17},
]

for (const i in alunos) {
  console.log(`${alunos[i].nome} tem ${alunos[i].idade}`);
    
}