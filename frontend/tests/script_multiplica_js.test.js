"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("JS: index.js continua registrando click no #botao_multiplicar e disparando 'multiplica'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "index.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // id do botão
  assert.match(codigo, /getElementById\("botao_multiplicar"\)/);

  // listener de click
  assert.match(codigo, /addEventListener\("click"/);

  // dispara operação multiplicar (hoje faz dispararOperacaoSolicitada\("multiplica"\)) :contentReference[oaicite:1]{index=1}
  assert.match(codigo, /dispararOperacaoSolicitada\("multiplica"\)/);
});

test("JS: operacoes.js continua chamando endpoint /multiplica ao receber evento 'operacao_solicitada' com 'multiplica'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "operacoes.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // escuta o evento e compara com "multiplica" :contentReference[oaicite:2]{index=2}
  assert.match(codigo, /addEventListener\("operacao_solicitada"/);
  assert.match(codigo, /evento\.detail\.operacao === "multiplica"/);

  // chama "/multiplica" :contentReference[oaicite:3]{index=3}
  assert.match(codigo, /chamarOperacao\("\/multiplica"\)/);
});
