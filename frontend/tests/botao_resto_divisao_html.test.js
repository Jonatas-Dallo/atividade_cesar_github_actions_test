"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("HTML: botão de resto da divisão mantém estrutura (id/class/type/texto)", () => {
  const caminhoDoHtml = path.join(__dirname, "..", "template", "index.html");
  const html = fs.readFileSync(caminhoDoHtml, "utf8");

  // Checagens simples e bem rígidas
  assert.match(html, /<button[^>]*id="botao_resto_divisao"[^>]*>/);
  assert.match(html, /<button[^>]*class="botao botao_primario"[^>]*>/);
  assert.match(html, /<button[^>]*type="button"[^>]*>/);

  // Texto "Resto da Divisão" dentro do botão (tolerando espaços/linhas)
  assert.match(
    html,
    /<button[^>]*id="botao_resto_divisao"[\s\S]*?>[\s\S]*Resto da Divisão[\s\S]*<\/button>/
  );
});
