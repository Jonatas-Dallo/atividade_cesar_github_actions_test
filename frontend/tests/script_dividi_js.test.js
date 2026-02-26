"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("JS: index.js continua registrando click no #botao_dividir e disparando 'dividi'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "index.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // id do botão
  assert.match(codigo, /getElementById\("botao_dividir"\)/);

  // listener de click
  assert.match(codigo, /addEventListener\("click"/);

  // dispara operação dividir (hoje faz dispararOperacaoSolicitada\("dividi"\)) :contentReference[oaicite:1]{index=1}
  assert.match(codigo, /dispararOperacaoSolicitada\("dividi"\)/);
});

test("JS: operacoes.js continua chamando endpoint /dividi ao receber evento 'operacao_solicitada' com 'dividi'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "operacoes.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // escuta o evento e compara com "dividi" :contentReference[oaicite:2]{index=2}
  assert.match(codigo, /addEventListener\("operacao_solicitada"/);
  assert.match(codigo, /evento\.detail\.operacao === "dividi"/);

  // chama "/dividi" :contentReference[oaicite:3]{index=3}
  assert.match(codigo, /chamarOperacao\("\/dividi"\)/);
});
