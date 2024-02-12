function verificarDiaSemanaAtual() {
  const hoje = new Date();
  const diaSemana = hoje.getDay();
  return diaSemana === 1;
}

function montarCorpoEmail() {
  return `
  <h1>CarStore</h1>
  <p></p>
  `;
}