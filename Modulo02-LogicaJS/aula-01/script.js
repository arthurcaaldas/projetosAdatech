function imc() {
  let nome = prompt('Digite seu nome');
  let data;
  
  let peso = 87;
  let altura = 1.74;
  
  let imc = peso / (altura * altura);
  
  if (imc < 18.5) {
    console.log('abaixo do peso');
  } else if (imc < 24.9) {
    console.log('peso ideal');
  } else if (imc < 29.9) {
    console.log('Pré-obesidade');
  } else if (imc < 34.9) {
    console.log('obesidade grau 1');
  } else if (imc < 39.9) {
    console.log('obesidade grau 2');
  } else {
    console.log('obesidade grau 3');
  }
}

// -------------------------------------------

function ex1() {
  let c = 18;
  let d = 14;

  let soma = c + d;

  console.log(soma)
}

function ex2() {
  let e = "Arthur ";
  let f = "Caldas";

  let nomeComp = e + f;

  console.log(nomeComp)
}

function ex3() {
  let num1 = 27;
  let num2 = "18";
  
  let soma = num1 + num2;

  if (typeof num1 === "number" && typeof num2 === "number") {
    console.log(soma);
  } else if (typeof num1 === "number" || typeof num2 === "number") {
    console.log("Um dos valores não é number")
  }
}

/*
ex4
Crie um algoritmo que, dada uma variável, que recebe o valor de um CPF com formatação, 
remova essa formatação e armazene esse valor sem formatação, como um 'number'.
*/

function ex4() {

}