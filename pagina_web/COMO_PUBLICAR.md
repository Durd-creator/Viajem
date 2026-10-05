# Como publicar a página da viagem (Google Apps Script)

Resultado: um link `https://script.google.com/macros/s/.../exec` que seus amigos abrem
no celular e veem o guia completo (roteiro dia a dia, mapas, custos, câmbio, checklist).
Ninguém precisa ter conta Google nem pedir acesso.

## Passo a passo (5 minutos)

1. Abra **https://script.google.com** → **Novo projeto**. Dê o nome `Viagem Andes`.
2. No arquivo `Código.gs` que já vem aberto, apague tudo e cole o conteúdo de
   [`Code.gs`](Code.gs).
3. Clique no **+** ao lado de "Arquivos" → **HTML** → nome: `Index` (sem `.html`).
   Apague o que vier e cole **todo** o conteúdo de [`Index.html`](Index.html).
4. Clique em **Salvar** (ícone de disquete).
5. Canto superior direito: **Implantar → Nova implantação**.
   - Engrenagem ⚙ ao lado de "Selecionar tipo" → **App da Web**.
   - Descrição: `v1`
   - **Executar como:** Eu (seu e-mail)
   - **Quem pode acessar:** **Qualquer pessoa**
   - **Implantar**. Se pedir, autorize a sua conta.
6. Copie o **URL do app da Web** (termina em `/exec`) e mande no grupo. Pronto!

> Dica: para um link mais curto, use um encurtador (bit.ly, tinyurl).

## Atualizar a página depois

1. Edite `guia_celular.html` (ou peça ao Claude para editar).
2. Rode `node ferramentas/gerar_pagina_web.js` (copia para `pagina_web/Index.html`).
3. No Apps Script, cole o novo conteúdo no arquivo `Index` e salve.
4. **Implantar → Gerenciar implantações** → lápis ✏ → Versão: **Nova versão** → **Implantar**.
   O link continua o mesmo; os amigos só recarregam a página.

> Não use "Nova implantação" para atualizar — isso cria um link novo.

## Observações

- O Google mostra uma faixa no topo: *"Este aplicativo foi criado por um usuário do Google Apps Script"*. É normal e não dá para tirar.
- Os links (Google Maps, sites oficiais) abrem em nova aba.
- O checklist de mala e o número de pessoas ficam salvos no celular de cada amigo.
- Alternativa avançada com o `clasp` (linha de comando): `clasp create --type webapp`,
  `clasp push` dentro de `pagina_web/` (o `appsscript.json` já está configurado para acesso público) e `clasp deploy`.

## Já publicado

- Link para os amigos: https://script.google.com/macros/s/AKfycbw3QImPNNNc4qbB4f8J43l16lnFbXmMClLJVBQdH2ubPyUr-TzOx6K-BsQIGVlyv2ArXg/exec
- Projeto no Apps Script: https://script.google.com/d/1ji0pDyUEfCSjiofmKUN2d0zckmmdFm49EYp6_mNyfEGfqWdAMxBWH2eS/edit
- Atualizar pelo terminal (com `clasp login` feito), mantendo o mesmo link:
  `cd pagina_web && clasp push -f && clasp update-deployment AKfycbw3QImPNNNc4qbB4f8J43l16lnFbXmMClLJVBQdH2ubPyUr-TzOx6K-BsQIGVlyv2ArXg`
