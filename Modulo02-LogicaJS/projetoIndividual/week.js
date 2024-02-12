function verificarDiaSemanaAtual() {
  const hoje = new Date();
  const diaSemana = hoje.getDay();
  return diaSemana === 1;
}

function montarEmail() {
  return `
  <h1>CarStore</h1>
  <p></p>
  `;
}