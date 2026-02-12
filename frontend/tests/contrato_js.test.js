"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("JS: index.js continua registrando click no #botao_somar e disparando 'soma'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "index.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // id do botão
  assert.match(codigo, /getElementById\("botao_somar"\)/);

  // listener de click
  assert.match(codigo, /addEventListener\("click"/);

  // dispara operação soma (hoje faz dispararOperacaoSolicitada\("soma"\)) :contentReference[oaicite:1]{index=1}
  assert.match(codigo, /dispararOperacaoSolicitada\("soma"\)/);
});

test("JS: operacoes.js continua chamando endpoint /soma ao receber evento 'operacao_solicitada' com 'soma'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "operacoes.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // escuta o evento e compara com "soma" :contentReference[oaicite:2]{index=2}
  assert.match(codigo, /addEventListener\("operacao_solicitada"/);
  assert.match(codigo, /evento\.detail\.operacao === "soma"/);

  // chama "/soma" :contentReference[oaicite:3]{index=3}
  assert.match(codigo, /chamarOperacao\("\/soma"\)/);
});
