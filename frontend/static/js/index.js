"use strict";

const CHAVE_LOCAL_STORAGE_NUMERO_1 = "calculadora_numero_1";
const CHAVE_LOCAL_STORAGE_NUMERO_2 = "calculadora_numero_2";

function obterValorComoTexto(idDoCampo) {
  const elementoCampo = document.getElementById(idDoCampo);
  return String(elementoCampo.value ?? "").trim();
}

function salvarValoresNoLocalStorage() {
  const numero1ComoTexto = obterValorComoTexto("entrada_numero_1");
  const numero2ComoTexto = obterValorComoTexto("entrada_numero_2");

  localStorage.setItem(CHAVE_LOCAL_STORAGE_NUMERO_1, numero1ComoTexto);
  localStorage.setItem(CHAVE_LOCAL_STORAGE_NUMERO_2, numero2ComoTexto);
}

function limparValoresNoLocalStorage() {
  localStorage.removeItem(CHAVE_LOCAL_STORAGE_NUMERO_1);
  localStorage.removeItem(CHAVE_LOCAL_STORAGE_NUMERO_2);
}

function dispararOperacaoSolicitada(operacao) {
  window.dispatchEvent(
    new CustomEvent("operacao_solicitada", {
      detail: { operacao },
    })
  );
}

function limparFormulario() {
  const elementoFormulario = document.getElementById("formulario_calculadora");
  elementoFormulario.reset();

  // limpar estado exposto
  limparValoresNoLocalStorage();

  // limpar resultado na tela (estado visual básico)
  const elementoSaidaResultado = document.getElementById("saida_resultado");
  elementoSaidaResultado.textContent = "—";
}

function inicializarPagina() {
  // Cada botão de operação: salva valores e avisa qual operação foi pedida
  const elementoBotaoSomar = document.getElementById("botao_somar");
  elementoBotaoSomar.addEventListener("click", function () {
    salvarValoresNoLocalStorage();
    dispararOperacaoSolicitada("soma");
  });

  ///////////////////////////////////////////////////////////////
  
  // Código para o botão de multiplicar (se inspirar no de somar, só mudar para multiplicar)

  ///////////////////////////////////////////////////////////////
  const elementoBotaoLimpar = document.getElementById("botao_limpar");
  elementoBotaoLimpar.addEventListener("click", limparFormulario);

  // Enter não recarrega; só salva e dispara soma (por enquanto)
  const elementoFormulario = document.getElementById("formulario_calculadora");
  elementoFormulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarValoresNoLocalStorage();
    dispararOperacaoSolicitada("soma");
  });
}

document.addEventListener("DOMContentLoaded", inicializarPagina);
