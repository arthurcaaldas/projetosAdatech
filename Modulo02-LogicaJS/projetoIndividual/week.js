const cadastro = (nome, email, flag) => {
  nome: "cliente01", email: "client01@example.com", flag: true,
  nome: "cliente02", email: "client02@example.com", flag: true,
  nome: "cliente03", email: "client03@example.com", flag: false,
  nome: "cliente04", email: "client04@example.com", flag: true,
  nome: "cliente05", email: "client05@example.com", flag: false,
  nome: "cliente06", email: "client06@example.com", flag: false,
  nome: "cliente07", email: "client07@example.com", flag: true
};

for (let i = 0; i < cadastro.length; i++) {
  console.log("E-mail " + (i+1) + ": " + emails[i]);
}





function DiaSemana() {
  const hoje = new Date();
  const diaSemana = hoje.getDay();
  return diaSemana === 1;
}

function enviarEmailSegunda() {
  const diaSemana = DiaSemana();
  
  if (diaSemana === true) {
    const novos = ["320i, 2022", "Audi A4, 2020", "Jetta gti, 2021"];
    const maisVendidos = ["Onix Ltz, 2019", "Ford Ka, 2020", "HB20, 2018"];
    
    const aquisicao = `
    Não perca a oportunidade única de adquirir um dos nossos veículos!
    Oferecemos financiamento com taxa de juros zero e primeira parcela para daqui a três meses.
    Além disso, estamos dando um desconto especial para os 10 primeiros clientes que comprarem um dos carros mais vendidos.
    Venha conferir em nossa concessionária CarStore!
    `;
    
    console.log("Olá! Você acaba de receber um Email de novidades da nossa concessionária CarStore.");
    console.log("Novos veículos:", novos);
    console.log("Mais vendidos:", maisVendidos);
    console.log("Condições de aquisição:", aquisicao);
  } else {
    console.log("Hoje não é segunda-feira. Nenhum email será enviado.");
  }
}

console.log(enviarEmailSegunda());






