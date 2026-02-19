"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("JS: index.js continua registrando click no #botao_resto_divisao e disparando 'resto_divisao'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "index.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // id do botão
  assert.match(codigo, /getElementById\("botao_resto_divisao"\)/);

  // listener de click
  assert.match(codigo, /addEventListener\("click"/);

  // dispara operação resto_divisao (hoje faz dispararOperacaoSolicitada\("resto_divisao"\)) :contentReference[oaicite:1]{index=1}
  assert.match(codigo, /dispararOperacaoSolicitada\("resto_divisao"\)/);
});

test("JS: operacoes.js continua chamando endpoint /resto_divisao ao receber evento 'operacao_solicitada' com 'resto_divisao'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "operacoes.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // escuta o evento e compara com "resto_divisao" :contentReference[oaicite:2]{index=2}
  assert.match(codigo, /addEventListener\("operacao_solicitada"/);
  assert.match(codigo, /evento\.detail\.operacao === "resto_divisao"/);

  // chama "/resto_divisao" :contentReference[oaicite:3]{index=3}
  assert.match(codigo, /chamarOperacao\("\/resto_divisao"\)/);
});
