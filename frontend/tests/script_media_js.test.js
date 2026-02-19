"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("JS: index.js continua registrando click no #botao_media e disparando 'media'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "index.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // id do botão
  assert.match(codigo, /getElementById\("botao_media"\)/);

  // listener de click
  assert.match(codigo, /addEventListener\("click"/);

  // dispara operação media
  assert.match(codigo, /dispararOperacaoSolicitada\("media"\)/);
});

test("JS: operacoes.js continua chamando endpoint /media ao receber evento 'operacao_solicitada' com 'media'", () => {
  const caminhoDoArquivo = path.join(__dirname, "..", "static", "js", "operacoes.js");
  const codigo = fs.readFileSync(caminhoDoArquivo, "utf8");

  // escuta o evento e compara com "media"
  assert.match(codigo, /addEventListener\("operacao_solicitada"/);
  assert.match(codigo, /evento\.detail\.operacao === "media"/);

  // chama "/media"
  assert.match(codigo, /chamarOperacao\("\/media"\)/);
});
