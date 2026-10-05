// Copia dados_viagem.json para dentro de PlanejamentoMasterAndes.gs (linha "const D = ...;").
// Uso: node ferramentas/atualizar_dados.js
const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..');
const gsPath = path.join(base, 'PlanejamentoMasterAndes.gs');
const dados = JSON.parse(fs.readFileSync(path.join(base, 'dados_viagem.json'), 'utf8'));
let src = fs.readFileSync(gsPath, 'utf8');
const linha = /^const D = .*;$/m;
if (!linha.test(src)) {
  console.error('Não achei a linha "const D = ...;" no .gs');
  process.exit(1);
}
src = src.replace(linha, () => 'const D = ' + JSON.stringify(dados) + ';');
fs.writeFileSync(gsPath, src);
console.log('Pronto: dados copiados para PlanejamentoMasterAndes.gs. Rode o teste_simulador.js e cole o .gs de novo no Apps Script.');
