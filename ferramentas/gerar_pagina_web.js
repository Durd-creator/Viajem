// Copia guia_celular.html para pagina_web/Index.html (a página que o Apps Script publica).
// Uso: node ferramentas/gerar_pagina_web.js
const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(base, 'guia_celular.html'), 'utf8');
fs.writeFileSync(path.join(base, 'pagina_web', 'Index.html'), html);
console.log('Pronto: pagina_web/Index.html atualizado. Cole o conteúdo no arquivo "Index" do Apps Script e publique uma nova versão.');
