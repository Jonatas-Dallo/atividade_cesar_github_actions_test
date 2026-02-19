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
  
  // Somar
  const elementoBotaoSomar = document.getElementById("botao_somar");
  elementoBotaoSomar.addEventListener("click", function () {
    salvarValoresNoLocalStorage();
    dispararOperacaoSolicitada("soma");
  });

  // Subtrair
  const elementoBotaoSubtrair = document.getElementById("botao_subtrair");
  elementoBotaoSubtrair.addEventListener("click", function () {
    salvarValoresNoLocalStorage();
    dispararOperacaoSolicitada("subtrai");
  });

  // Multiplicar
  const elementoBotaoMultiplicar = document.getElementById("botao_multiplicar");
  elementoBotaoMultiplicar.addEventListener("click", function () {
    salvarValoresNoLocalStorage();
    dispararOperacaoSolicitada("multiplica");
  });

  // Dividir
  const elementoBotaoDividir = document.getElementById("botao_dividir");
  elementoBotaoDividir.addEventListener("click", function () {
    salvarValoresNoLocalStorage();
    dispararOperacaoSolicitada("Dividi");
  });

  // Resto da Divisão
  const elementoBotaoRestoDivisao = document.getElementById("botao_resto_divisao");
  elementoBotaoRestoDivisao.addEventListener("click", function () {
    salvarValoresNoLocalStorage();
    dispararOperacaoSolicitada("resto_divisao");
  });

  // Média
const elementoBotaoMedia = document.getElementById("botao_media");
elementoBotaoMedia.addEventListener("click", function () {
  salvarValoresNoLocalStorage();
  dispararOperacaoSolicitada("media");
});


  ///////////////////////////////////////////////////////////////

  // Código para o botão de multiplicar (se inspirar no de somar, só mudar para multiplicar)

  ///////////////////////////////////////////////////////////////
  const elementoBotaoLimpar = document.getElementById("botao_limpar");
  elementoBotaoLimpar.addEventListener("click", limparFormulario);
}

document.addEventListener("DOMContentLoaded", inicializarPagina);
