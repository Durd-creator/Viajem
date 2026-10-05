# Planejamento Master Andes — resumo completo do projeto

> Cole este arquivo no Claude Code junto com a pasta. Ele explica a viagem, as decisões tomadas, os dados e o que cada arquivo faz.
> Pesquisa e preços de **05/10/2026**. Dono: Gui.

---

## 1. Objetivo

Viagem de **16 dias** por **Peru → Bolívia → Chile** (Machu Picchu, Salar de Uyuni e Atacama), estilo **intermediário**: hotel 3★, tours compartilhados e 2 pessoas dividindo quarto e carro. O mês ainda não foi definido.

O projeto entrega:

1. Uma **planilha no Google Planilhas**, criada por um Google Apps Script, com roteiro, fotos, preços, custos, compras, hospedagem e checklist.
2. Um **guia para celular** (HTML) com mapa de cada lugar, gastos por dia e câmbio.

---

## 2. Arquivos do pacote

| Arquivo | Para que serve |
|---|---|
| `PlanejamentoMasterAndes.gs` | **Arquivo principal.** Script do Google Apps Script. Cole em Extensões → Apps Script e rode `criarPlanilha`. Os dados ficam embutidos no topo, na linha `const D = {...};`. |
| `dados_viagem.json` | Os mesmos dados do `const D` em JSON: dias, lugares, preços, fotos, custos, compras, hotéis, alertas e fontes. Edite aqui. |
| `guia_celular.html` | Guia completo para celular, em um arquivo só. Abre direto no navegador. Já está publicado como artifact privado no Claude. |
| `ferramentas/atualizar_dados.js` | Copia o `dados_viagem.json` para dentro do `.gs`. Uso: `node ferramentas/atualizar_dados.js`. |
| `ferramentas/teste_simulador.js` | Roda o `.gs` num simulador do Google Planilhas e acusa erros de dimensão e de execução. Uso: `node ferramentas/teste_simulador.js`. |

---

## 3. Roteiro final (16 dias)

Fusos: Peru UTC−5 → Bolívia UTC−4 (adiantar 1 h) → Chile UTC−3 de set a abr (adiantar mais 1 h; de abr a set fica igual à Bolívia).

| Dia | País | Programa | Dorme em | Alt. (m) | Gasto/pessoa (R$) |
|---|---|---|---|---|---|
| 0 | — | Antes: voos, seguro, chip | — | — | 3.304–6.159 |
| 1 | Peru | Chegada a Cusco e transfer direto para o Vale Sagrado | Ollantaytambo | 2.792 | 339–501 |
| 2 | Peru | Pisac (ruínas e mercado) e ruínas de Ollantaytambo | Ollantaytambo | 2.792 | 606–805 |
| 3 | Peru | Moray e Salineras de Maras; trem 15:37 (PeruRail) ou 16:36 (Inca Rail) | Águas Calientes | 2.040 | 795–1.218 |
| 4 | Peru | Machu Picchu (fila 04:30, entrada 06:00/07:00); trem 15:20; van para Cusco | Cusco | 3.399 | 852–1.219 |
| 5 | Peru | Cusco: Qorikancha, Catedral, Mercado San Pedro, San Blas | Cusco | 3.399 | 327–496 |
| 6 | Peru | Sacsayhuamán, Q'enqo, Puka Pukara, Tambomachay; ônibus noturno 21:30/22:30 | Ônibus | — | 282–452 |
| 7 | Bolívia | Puno 05:00 → fronteira Kasani ≈11:00 → Copacabana 13:30; Basílica; Cerro Calvario | Copacabana | 3.840 | 113–195 |
| 8 | Bolívia | Isla del Sol (Yumani) 08:30–15:30; ônibus 18:00 para La Paz | La Paz | 3.650 | 188–357 |
| 9 | Bolívia | Mi Teleférico (Vermelha → Prateada → Amarela), centro e Mercado das Bruxas; Todo Turismo 21:00 | Ônibus | — | 304–388 |
| 10 | Bolívia | Uyuni 07:00; tour dia 1: Cemitério de Trens, Colchani, Salar, Incahuasi | Hotel de sal | 3.660 | 1.135–1.318 |
| 11 | Bolívia | Tour dia 2: lagunas, Árbol de Piedra, Laguna Colorada | Refúgio | 4.300 | 78–121 |
| 12 | Chile | Sol de Mañana, Polques, Laguna Verde; fronteira Hito Cajón; San Pedro ≈13:00 | San Pedro | 2.407 | 370–639 |
| 13 | Chile | Manhã livre (Pukará de Quitor); Valle de la Luna 15:30–20:30 | San Pedro | 2.407 | 578–904 |
| 14 | Chile | Piedras Rojas, Lagunas Miscanti e Miñiques, Chaxa; tour astronômico 21:00 | San Pedro | 2.407 | 933–1.259 |
| 15 | Chile | Manhã livre (folga); Lagunas Escondidas de Baltinache 14:00–19:00 | San Pedro | 2.407 | 632–973 |
| 16 | Chile | Transfer para Calama (3–3,5 h antes do voo); voo para Santiago e depois Brasil | — | — | 143–222 |

**Total por pessoa:** R$ 7.778–11.277 sem voos e seguro · R$ 10.978–17.227 com voos e seguro · R$ 12.076–18.950 com 10% de reserva.

---

## 4. Decisões tomadas (mudanças em relação às planilhas originais)

1. **Aclimatação:** o Dia 1 vai direto para Ollantaytambo (2.792 m) em vez de dormir em Cusco (3.399 m). Cusco fica para depois de Machu Picchu.
2. **Vale Sagrado sem vai-e-vem:** antes eram 2 tours de van saindo de Cusco. Agora tudo sai de Ollantaytambo, de onde parte o trem.
3. **Cusco → Copacabana:** o ônibus diurno 06:30 → 17:00 não é linha direta confiável. Trocado por **ônibus noturno** (Bolivia Hop 21:30 ou diretos ≈22:30 no Terminal Terrestre). Economiza 1 diária.
4. **Cusco ganhou 1 dia e La Paz perdeu 1.** Para incluir Estrada da Morte, Tiwanaku ou luta de cholitas, acrescente 1 dia em La Paz.
5. **Atacama:** o Tatio foi trocado por Piedras Rojas, porque o Sol de Mañana (Uyuni) já é campo de gêiseres ao amanhecer. O Tatio continua como alternativa. Baltinache passou para a tarde, e as manhãs dos dias 13 e 15 ficaram como folga.
6. **Margem de segurança:** os dias no Atacama absorvem atrasos da Bolívia (bloqueios, falta de combustível). Não pagar tudo antes sem cancelamento grátis.
7. **Voo de volta:** Calama (CJC) só tem voos domésticos, então a volta conecta em Santiago. Escolher voo à tarde.

**Mantido do plano original:** ordem Peru → Bolívia → Chile; Uyuni no sentido Uyuni → San Pedro; noite em Águas Calientes antes de Machu Picchu; checklist de roupas e documentos.

---

## 5. Regras e preços confirmados (out/2026)

- **Machu Picchu:** S/163 (S/152 + taxa de conservação S/11 desde 01/05/2026), vendido só em `tuboleto.cultura.pe`.
  - Desde 22/09/2026: 15 minutos para pagar e ingresso nominal.
  - Guia oficial obrigatório, até 10 pessoas por guia. Sem reentrada.
  - Brasileiro paga o preço cheio de estrangeiro.
- **Trem:** US$55–90 por trecho, bagagem até 8 kg. **Ônibus Consettur:** US$24 ida e volta; primeiro ônibus 05:30.
- **Boleto Turístico del Cusco:** S/130 (16 sítios, 10 dias), só dinheiro, COSITUC na Av. El Sol 103. **Fora do boleto:** Maras S/20, Qorikancha ≈S/15, Catedral S/40.
- **Bolívia:**
  - O boliviano **flutua desde 29/06/2026**: ≈Bs 12 por US$, Bs 1 ≈ R$0,43. As planilhas antigas usavam R$0,75.
  - Cartões Wise e Nomad funcionam. Saque em La Paz: não há caixas no tour do Uyuni.
  - Certificado de febre amarela (CIVP) é exigido de quem vem do Brasil ou do Peru. RG físico com menos de 10 anos é aceito.
  - Guarde o comprovante de entrada até a saída do país.
- **Tour Uyuni → San Pedro:** US$210–240. Taxas à parte: Reserva Avaroa Bs 150, Incahuasi Bs 30, Polques Bs 6–30, saída informal ≈Bs 15.
- **Chile:**
  - Controle SAG e PDI no complexo Hito Cajón. **Proibido entrar com coca** (folha, chá ou bala); declarar alimentos.
  - Valle de la Luna: CLP 10.800 online. Mirante Ckari fechado; o vale fechou nas terças de out/2026.
  - Piedras Rojas e lagunas: entrada só em `socairechile.cl`. Tatio: CLP 15.000 no portão.
  - Baltinache: CLP 6.000–12.000 em dinheiro. San Pedro tem só ≈4 caixas eletrônicos.
- **Câmbio usado (05/10/2026):** US$1 = R$5,22 · S/1 = R$1,51 · Bs 1 = R$0,433 · CLP 1 = R$0,00529.

---

## 6. Alertas para checar antes de viajar

- **Trens para Machu Picchu:** colisão em 02/10/2026, sem feridos. Circulação suspensa e retomada aos poucos. Ver `perurail.com`.
- **Bolívia:**
  - Estado de emergência até ≈meados de dez/2026.
  - Ameaça de bloqueios pelo preço do diesel.
  - Uyuni ficou sem gasolina em 21–24/09/2026.
  - Verificar estradas em `transitabilidad.abc.gob.bo`.
- **Reserva Eduardo Avaroa:** fechou por neve em agosto e em 19/09/2026.

---

## 7. Estrutura dos dados (`dados_viagem.json` = `const D` no script)

| Chave | Formato |
|---|---|
| `geradoEm`, `guia`, `pessoas` | data da pesquisa, link do guia, pessoas dividindo (2) |
| `taxas[]` | `[moeda, nome, R$ por unidade, ticker GOOGLEFINANCE, observação]` |
| `dias[]` | `{n, pais, titulo, dorme, alt, acordar, saida, transporte, passos:[[hora,texto]], lugares:[ids], comer:[ids], dicas[], mudou, foto:idFoto, regras:[[diasSemana(0=dom), aviso]]}` |
| `lugares[]` (113) | `{id, nome, cat, cidade, pais, end, info, url (Google Maps), preco (texto), moeda, min, max, est (estimativa?), dias}` |
| `fotos{}` | `id → ["en:Título Wikipedia", "es:…", "pt:…", "c:busca no Wikimedia Commons"]`, tentadas em ordem |
| `custos[]` (72) | `[dia(0=antes), país, categoria, item, moeda, mín, máx, divide por pessoas?, estimativa?]` |
| `categorias[]` | Hospedagem, Transporte, Ingressos e tours, Alimentação, Outros, Voos e seguro |
| `compras[]` (31) | `[país, item, onde, quando, pagamento, preço texto, moeda, mín, máx, obs]` |
| `hoteis[]` | `[cidade, país, noites, onde ficar, por quê, US$ mín, US$ máx, exemplo conferido, termo de busca]` |
| `docs, antes, epocas, fusos, dinheiro, emergencia, apps, saude, mala, mudancas, manter, alertas, fontes` | listas de texto das abas de apoio |

---

## 8. O que o script faz (`criarPlanilha`)

- **Configura** localidade pt_BR e fuso America/Sao_Paulo. Apaga e recria 11 abas: Painel, Roteiro, Lugares, Custos, Compras e Reservas, Hospedagem, Antes de Ir, Checklist, Mudanças e Alertas, Câmbio, Fontes.
- **Intervalos nomeados:** `INICIO` (data do Dia 1, em Painel!C4), `MOEDAS`, `TAXAS`, `PESSOAS`, `CUSTO_DIA`, `CUSTO_PAIS`, `CUSTO_CAT`, `CUSTO_MIN`, `CUSTO_MAX`.
- **Fórmulas:**
  - Valor em R$ = valor local × `INDEX(TAXAS, MATCH(moeda, MOEDAS, 0))`, dividido por `PESSOAS` quando "Divide? = Sim".
  - Gasto por dia: `SUMIFS(CUSTO_MIN, CUSTO_DIA, dia)`. Totais por categoria e por país também via `SUMIFS`.
  - Data do dia: `INICIO + dia − 1`.
  - Avisos por dia da semana: `TEXTJOIN` com `WEEKDAY`.
- **Câmbio:** ao vivo pelo `GOOGLEFINANCE("CURRENCY:XXXBRL")`, com caixa "Usar ao vivo?". Se falhar, vale o valor fixo. Se o BOB vier ≈0,75, a cotação está velha: desmarcar.
- **Fotos (`carregarFotos`):**
  - Busca via `UrlFetchApp.fetchAll` na API REST da Wikipedia (`/page/summary/`) e no Wikimedia Commons (`generator=search`, `filetype:bitmap`, `iiurlwidth=500`).
  - Tenta até 3 fontes por lugar. Grava o link na coluna "URL da foto" e a célula de foto usa `IMAGE(url)`.
  - Restaurantes, caixas eletrônicos e agências não têm foto livre: mostram o link "Ver fotos no Google Maps".
- **Menu "Viagem Andes":** recriar tudo, carregar fotos que faltam, recarregar todas as fotos, ir para o dia de hoje.
- **Cores e formatação:** inputs em azul com fundo amarelo; cor de fundo por país; caixas de seleção em Pago?, Comprado? e Checklist.

---

## 9. O que ainda não foi testado ou confirmado

- **O script nunca rodou no Google de verdade.** Rodou num simulador (`ferramentas/teste_simulador.js`) sem erros, e todas as fórmulas foram recalculadas sem erro no LibreOffice. Primeiro teste real: rodar `criarPlanilha` e conferir as abas.
- **Fotos:** não deu para pré-visualizar o resultado das buscas no Wikimedia, então algumas podem vir erradas ou genéricas. Conserto: trocar o termo em `fotos{}` ou colar a URL na planilha.
- **Preços marcados `est: true`** são estimativas, sem tabela oficial: restaurantes, hotéis, táxis no Vale, guia de Machu Picchu, voos (R$3.000–5.500), seguro, chip e comida na Bolívia após a inflação.
- **Não confirmados para 2026:**
  - preço do Qorikancha;
  - acesso ao lado norte da Isla del Sol;
  - horário da travessia de Tiquina (possível fechamento às 18:30);
  - endereço do ponto do Bolivia Hop em Cusco;
  - fiscalização do CIVP em Kasani e Hito Cajón;
  - se as casas de câmbio aceitam real.
- **Hotéis:** só dois exemplos foram conferidos (El Albergue em Ollantaytambo e Hotel Kimal em San Pedro). As outras cidades têm só área recomendada e faixa de preço.

---

## 10. Ideias de próximos passos para o Claude Code

1. Rodar no Google Planilhas e corrigir o que o Google reclamar (permissões, limites, fórmulas).
2. Quando houver data da viagem, preencher `INICIO` e revisar os avisos de dia da semana e a lua para o tour astronômico. A lua nova de referência é 10/10/2026.
3. Opcional: usar a Google Places API (chave própria) para buscar fotos de restaurantes e hotéis.
4. Opcional: aba de hotéis reservados (nome, endereço, link da reserva, código de confirmação).
5. Se mudar dados: editar `dados_viagem.json` → `node ferramentas/atualizar_dados.js` → `node ferramentas/teste_simulador.js` → colar o `.gs` de novo no Apps Script.

---

## 11. Principais fontes

- [Tarifas Machu Picchu 2026 (Infobae)](https://www.infobae.com/peru/2026/02/09/suben-tarifas-de-ingreso-a-machu-picchu-desde-cuando-rige-y-cuanto-costara-entrar-en-2026/)
- [Aviso PeruRail 2/out/2026](https://www.perurail.com/es/comunicados/aviso-de-servicio-2-octubre-2026)
- [Boleto Turístico (COSITUC)](https://cosituccusco.pe/)
- [Câmbio oficial Bolívia (BCB)](https://www.bcb.gob.bo/librerias/indicadores/otras/ultimo.php)
- [Estradas da Bolívia (ABC)](https://transitabilidad.abc.gob.bo/)
- [Todo Turismo](https://todoturismo.bo/en/)
- [Hito Cajón](https://www.pasosfronterizos.gov.cl/complejos-fronterizos/antofagasta/paso-hito-cajon/)
- [Valle de la Luna](https://valledelaluna.com/)
- [Socaire / Piedras Rojas](https://socairechile.cl/)

A lista completa está em `dados_viagem.json` → `fontes`.
