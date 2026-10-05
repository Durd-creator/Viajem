// Simula o Google Planilhas e roda criarPlanilha() do .gs, sem internet.
// Acusa: setValues com dimensões erradas, erros de execução, abas e intervalos nomeados faltando.
// Uso: node ferramentas/teste_simulador.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const src = fs.readFileSync(path.join(__dirname, '..', 'PlanejamentoMasterAndes.gs'), 'utf8');
const sheets = {}; const named = {}; let order = [];
function colToNum(s){let n=0;for(const ch of s)n=n*26+ch.charCodeAt(0)-64;return n}
function numToCol(n){let s='';while(n>0){const m=(n-1)%26;s=String.fromCharCode(65+m)+s;n=Math.floor((n-1)/26)}return s}
function parseA1(a){const m=a.match(/^([A-Z]+)(\d+)(?::([A-Z]+)(\d+))?$/);const c1=colToNum(m[1]),r1=+m[2];const c2=m[3]?colToNum(m[3]):c1,r2=m[4]?+m[4]:r1;return [r1,c1,r2-r1+1,c2-c1+1]}
const errors=[];
function makeRange(sh,r,c,nr,nc){
  const rg={sheet:sh,r,c,nr,nc};
  const api={
    setValues(v){ if(v.length!==nr||v.some(x=>x.length!==nc)) errors.push(`dim mismatch ${sh.name} R${r}C${c} ${nr}x${nc} got ${v.length}x${v[0]&&v[0].length}`); v.forEach((row,i)=>row.forEach((x,j)=>sh.cells[(r+i)+','+(c+j)]=x)); return p;},
    setFormulas(v){ return api.setValues(v);},
    setValue(x){ sh.cells[r+','+c]=x; return p;},
    getValues(){ const out=[];for(let i=0;i<nr;i++){const row=[];for(let j=0;j<nc;j++){const v=sh.cells[(r+i)+','+(c+j)];row.push(v===undefined?'':v)}out.push(row)}return out;},
    getValue(){ const v=sh.cells[r+','+c]; return v===undefined?'':v;},
    setBackgrounds(v){ if(v.length!==nr) errors.push('bg dim '+sh.name); return p;},
    insertCheckboxes(){ for(let i=0;i<nr;i++)for(let j=0;j<nc;j++){const k=(r+i)+','+(c+j); if(sh.cells[k]===undefined||sh.cells[k]==='') sh.cells[k]=false; sh.checks[k]=1;} return p;},
    setNumberFormat(f){ for(let i=0;i<nr;i++)for(let j=0;j<nc;j++) sh.fmt[(r+i)+','+(c+j)]=f; return p;},
    _rg:rg
  };
  const p=new Proxy(api,{get(t,k){ if(k in t) return t[k]; return ()=>p; }});
  return p;
}
function makeSheet(name){
  const sh={name,cells:{},fmt:{},checks:{},id:Math.random()};
  const api={
    getRange(a,b,c,d){ if(typeof a==='string'){const [r,cc,nr,nc]=parseA1(a);return makeRange(sh,r,cc,nr,nc);} return makeRange(sh,a,b,c||1,d||1);},
    getName(){return name}, getSheetId(){return sh.id}, getLastRow(){return Object.keys(sh.cells).length?1:0},
  };
  const p=new Proxy(api,{get(t,k){ if(k in t) return t[k]; return ()=>p; }});
  sh.api=p; return sh;
}
const ss={
  setSpreadsheetLocale(){},setSpreadsheetTimeZone(){},getName(){return 'Planilha sem título'},rename(){},toast(){},
  insertSheet(n,i){const s=makeSheet(n);sheets[n]=s; if(i===undefined) order.push(n); else order.splice(i,0,n); return s.api;},
  getSheetByName(n){return sheets[n]?sheets[n].api:null},
  deleteSheet(api){const n=api.getName(); delete sheets[n]; order=order.filter(x=>x!==n);},
  getSheets(){return order.map(n=>sheets[n].api)},
  removeNamedRange(n){ if(!named[n]) throw new Error('no'); delete named[n];},
  setNamedRange(n,rg){ const x=rg._rg; named[n]={sheet:x.sheet.name,r:x.r,c:x.c,nr:x.nr,nc:x.nc}; },
  setActiveSheet(){}, getRangeByName(n){const x=named[n];return makeRange(sheets[x.sheet],x.r,x.c,x.nr,x.nc)}
};
ss.insertSheet('Página1');
const chain=new Proxy({},{get(t,k){ if(k==='build') return ()=>({}); return ()=>chain; }});
global.SpreadsheetApp={getActive:()=>ss,newDataValidation:()=>chain,BorderStyle:{SOLID:1},getUi:()=>chain,flush(){}};
global.Utilities={sleep(){}};
let fetchCount=0;
global.UrlFetchApp={fetchAll(reqs){ return reqs.map(q=>{fetchCount++; const u=q.url; let body;
  if(u.includes('commons')) body={query:{pages:{'5':{index:2,imageinfo:[{mime:'image/jpeg',thumburl:'https://upload.wikimedia.org/c2.jpg'}]},'9':{index:1,imageinfo:[{mime:'application/pdf',thumburl:'x.pdf'}]}}}};
  else if(u.includes('Moray')) return {getResponseCode:()=>404,getContentText:()=>'{}'};
  else body={type:'standard',thumbnail:{source:'https://upload.wikimedia.org/w/'+encodeURIComponent(u.split('/summary/')[1])+'.jpg'}};
  return {getResponseCode:()=>200,getContentText:()=>JSON.stringify(body)};});}};
vm.runInThisContext(src + '\ncriarPlanilha();', { filename: 'PlanejamentoMasterAndes.gs' });
let formulas = 0;
for (const n of order) for (const v of Object.values(sheets[n].cells)) if (typeof v === 'string' && v.startsWith('=')) formulas++;
const esperadas = ['Painel','Roteiro','Lugares','Custos','Compras e Reservas','Hospedagem','Antes de Ir','Checklist','Mudanças e Alertas','Câmbio','Fontes'];
const faltando = esperadas.filter(n => !order.includes(n));
console.log('Abas:', order.join(', '));
console.log('Intervalos nomeados:', Object.keys(named).join(', '));
console.log('Fórmulas escritas:', formulas, '| buscas de foto simuladas:', fetchCount);
if (errors.length || faltando.length) { console.error('ERROS:', errors, 'Abas faltando:', faltando); process.exit(1); }
console.log('OK: o script rodou do começo ao fim no simulador.');
