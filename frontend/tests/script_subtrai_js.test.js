"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("JS: index.js continua registrando click no #botao_subtrair e disparando 'subtrai'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "index.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // id do botão
  assert.match(codigo, /getElementById\("botao_subtrair"\)/);

  // listener de click
  assert.match(codigo, /addEventListener\("click"/);

  // dispara operação subtrai (hoje faz dispararOperacaoSolicitada\("subtrai"\)) :contentReference[oaicite:1]{index=1}
  assert.match(codigo, /dispararOperacaoSolicitada\("subtrai"\)/);
});

test("JS: operacoes.js continua chamando endpoint /subtrai ao receber evento 'operacao_solicitada' com 'subtrai'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "operacoes.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // escuta o evento e compara com "subtrai" :contentReference[oaicite:2]{index=2}
  assert.match(codigo, /addEventListener\("operacao_solicitada"/);
  assert.match(codigo, /evento\.detail\.operacao === "subtrai"/);

  // chama "/subtrai" :contentReference[oaicite:3]{index=3}
  assert.match(codigo, /chamarOperacao\("\/subtrai"\)/);
});
