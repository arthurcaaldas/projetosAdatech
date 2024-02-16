// Importando a funcao enviarEmail do arquivo enviar-email que nao pode sofrer alterações.

const enviarEmail = require('./enviar-email');

// lista (array) de emails criada, onde estão armazenados os emails dos clientes com as flags de decisao para recebimento de email.
const cadastro = [
  { nome: "cliente01", email: "client01@example.com", flag: true },
  { nome: "cliente02", email: "client02@example.com", flag: true },
  { nome: "cliente03", email: "client03@example.com", flag: false },
  { nome: "cliente04", email: "client04@example.com", flag: true },
  { nome: "cliente05", email: "client05@example.com", flag: false },
  { nome: "cliente06", email: "client06@example.com", flag: false },
  { nome: "cliente07", email: "client07@example.com", flag: true }
];

// Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.

let cadastroValidado = [];

function validarFlag() {
  for (let i = 0; i < cadastro.length; i++) {
    if (cadastro[i].flag === true) {   
      cadastroValidado.push(cadastro[i]);
    }
  }    
}  
validarFlag();

// Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.

function verificadorDiaSemana() {
  const hoje = new Date();
  const diaSemana = hoje.getDay();
  return diaSemana === 1;
}

// Criar uma função para montar o corpo do e-mail a ser enviado.

function enviarEmailSegunda() {
  const diaSemana = verificadorDiaSemana();
  
  if (diaSemana) {
    const novos = ["320i, 2022", "Audi A4, 2020", "Jetta gti, 2021"];
    const maisVendidos = ["Onix Ltz, 2019", "Ford Ka, 2020", "HB20, 2018"];
    
    const aquisicao = `
    Oferecemos financiamento com taxa de juros zero e primeira parcela para daqui a três meses.
    Além disso, estamos dando um desconto especial para os 10 primeiros clientes que comprarem um dos carros mais vendidos.
    
    Venha conferir!
    `;
    
    for (const cliente of cadastroValidado) {
      const emailStatus = enviarEmail(cliente.email, "Novidades na CarStore", `
      Olá ${cliente.nome}! Você acaba de receber um Email de novidades da nossa concessionária CarStore.
      
      Novos veículos: ${novos.join(", ")}
      Mais vendidos: ${maisVendidos.join(", ")}
      
      Condições de aquisição: ${aquisicao}
      `);
      console.log(emailStatus);
    }
  } else {
    console.log("Hoje não é segunda-feira. Nenhum email será enviado.");
  }
}

enviarEmailSegunda();