"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("HTML: botão média mantém estrutura (id/class/type/texto)", () => {
  const caminhoDoHtml = path.join(__dirname, "..", "template", "index.html");
  const html = fs.readFileSync(caminhoDoHtml, "utf8");

  // Checagens simples e bem rígidas
  assert.match(html, /<button[^>]*id="botao_media"[^>]*>/);
  assert.match(html, /<button[^>]*class="botao botao_primario"[^>]*>/);
  assert.match(html, /<button[^>]*type="button"[^>]*>/);

  // Texto "Média" dentro do botão (tolerando espaços/linhas)
  assert.match(
    html,
    /<button[^>]*id="botao_media"[\s\S]*?>[\s\S]*Média[\s\S]*<\/button>/
  );
});
