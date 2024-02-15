const cadastro = [
  { nome: "cliente01", email: "client01@example.com", flag: true },
  { nome: "cliente02", email: "client02@example.com", flag: true },
  { nome: "cliente03", email: "client03@example.com", flag: false },
  { nome: "cliente04", email: "client04@example.com", flag: true },
  { nome: "cliente05", email: "client05@example.com", flag: false },
  { nome: "cliente06", email: "client06@example.com", flag: false },
  { nome: "cliente07", email: "client07@example.com", flag: true }
];

let cadastroValidado = [];

function validarFlag() {
  for (let i = 0; i < cadastro.length; i++) {
    if (cadastro[i].flag === true) {   
      cadastroValidado.push(cadastro[i]);
    }
  }    
}  
validarFlag();

const enviarEmail = (addressee, subject, body) => {
  if (!addressee) {
    return {
      status: "Error",
      message: "Um destinatário precisa ser fornecido ao enviar um e-mail.",
    };
  }
  
  if (!subject) {
    return {
      status: "Error",
      message: "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
    };
  }
  
  if (!body) {
    return {
      status: "Error",
      message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.",
    };
  }
  
  console.log(
    `
    De: news@carstore.com
    Para: ${addressee}
    Assunto: ${subject}
    
    ${body}
    
    CarStore - Aqui você encontra o seu carro novo
    `
    );
    
    return { status: "Sucess", message: "E-mail enviado com sucesso!" };
  };
  
  module.exports = enviarEmail;
  
  function DiaSemana() {
    const hoje = new Date();
    const diaSemana = hoje.getDay();
    return diaSemana === 4;
  }
  
  function enviarEmailSegunda() {
    const diaSemana = DiaSemana();
    
    if (diaSemana) {
      const novos = ["320i, 2022", "Audi A4, 2020", "Jetta gti, 2021"];
      const maisVendidos = ["Onix Ltz, 2019", "Ford Ka, 2020", "HB20, 2018"];
      
      const aquisicao = `
      Não perca a oportunidade única de adquirir um dos nossos veículos!
      Oferecemos financiamento com taxa de juros zero e primeira parcela para daqui a três meses.
      Além disso, estamos dando um desconto especial para os 10 primeiros clientes que comprarem um dos carros mais vendidos.
      Venha conferir em nossa concessionária CarStore!
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