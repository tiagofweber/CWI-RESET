colaboradores = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison'];
idades = [69, 66, 58, 61, 60, 64, 59, 55];
temposDeTrabalho = [31, 29, 30, 26, 25, 24, 26, 29];

function verificarAposentadoria(nome) {
  index = -1;

  for (i = 0; i < colaboradores.length; i++) {
    if (nome == colaboradores[i]) {
      index = i;
    }
  }

  idade = idades[index];
  tempoDeTrabalho = temposDeTrabalho[index];

  if (index == -1) {
    console.log("Colaborador inválido :|");
  } else if (idade >= 65) {
    console.log("Parabéns, já pode sair de férias eternas :)");
  } else if (tempoDeTrabalho >= 30) {
    console.log("Parabéns, já pode sair de férias eternas :)");
  } else if (idade >= 60 && tempoDeTrabalho >= 25) {
    console.log("Parabéns, já pode sair de férias eternas :)");
  } else {
    console.log("Infelizmente para você, ainda falta um tempo :(");
  }
}

verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Agripino')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)
verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)
