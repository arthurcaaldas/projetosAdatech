function verificarDiaSemanaAtual() {
  const hoje = new Date();
  const diaSemana = hoje.getDay();
  return diaSemana === 1;
}