/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores 
e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste seguindo o 
seguinte critério, baseado no salário atual:

salários até R$ 1500,00 (incluindo) : aumento de 20%
salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
salários de R$ 2000,00 em diante : aumento de 5% 

Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.
*/

let salario = 1700;
let porcentagem;
let aumento;

if (salario >= 0 && salario <= 1500) {
  porcentagem = 20;
  aumento = salario + (salario * 0.2);
} else if (salario > 1500 && salario <= 1700) {
  porcentagem = 15;
  aumento = salario + (salario * 0.15);
} else if (salario > 1700 && salario <= 2000) {
  porcentagem = 10;
  aumento = salario + (salario * 0.10);
} else if (salario > 2000) {
  porcentagem = 5;
  aumento = salario + (salario * 0.05);
}

console.log(`O salario recebido foi de: ${salario}`);
console.log(`Aumento de: ${porcentagem}%`);
console.log(`Aumento de: ${aumento - salario}`);
console.log(`Salario total foi de: ${aumento}`);