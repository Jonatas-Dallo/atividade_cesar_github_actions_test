"use strict";

function obterNumerosDoLocalStorage() {
  const numero1 = Number(localStorage.getItem("calculadora_numero_1"));
  const numero2 = Number(localStorage.getItem("calculadora_numero_2"));
  return { numero1, numero2 };
}

async function chamarOperacao(endpoint) {
  const { numero1, numero2 } = obterNumerosDoLocalStorage();

  const resposta = await fetch(`http://localhost:5000${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ numero1, numero2 }),
  });

  const corpoComoJson = await resposta.json();
  document.getElementById("saida_resultado").textContent = String(corpoComoJson.resultado);
}

window.addEventListener("operacao_solicitada", (evento) => {
  // Soma
  if (evento.detail.operacao === "soma") {
    chamarOperacao("/soma");
  }

  // Subtrai
  if (evento.detail.operacao === "subtrai") {
    chamarOperacao("/subtrai")
  }

  // Multiplicar
  if (evento.detail.operacao === "multiplica") {
    chamarOperacao("/multiplica")
  }

  // Dividir
  if (evento.detail.operacao === "dividi") {
    chamarOperacao("/dividi")
  }

  // Resto da Divisão
  if (evento.detail.operacao === "resto_divisao") {
    chamarOperacao("/resto_divisao")
  }

    // Média
  if (evento.detail.operacao === "media") {
    chamarOperacao("/media")

  }
  // if para multiplicar (se inspirar no de soma, só mudar para multiplicar)


});