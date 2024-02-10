/*
    Faça um programa com uma função chamada 'somaImposto'.
    A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa 
    em porcentagem e custo, que é o custo de um item antes do imposto. 
    A função “altera” o valor de custo para incluir o imposto sobre vendas e retorna o preco final do item ao consumidor
*/

function somaImposto(taxaImposto, custo) {
  const imposto = custo * (taxaImposto / 100);
  const precoFinal = custo + imposto;
  
  return precoFinal;
}

const taxaImposto = 10;
const custo = 100;
const precoComImposto = somaImposto(taxaImposto, custo);
console.log("Preço final com imposto: R$" + precoComImposto);