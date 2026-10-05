/**
 * Página da viagem para os amigos — Google Apps Script (Web App).
 *
 * Publica o guia_celular.html (salvo aqui como "Index.html") em um link
 * que qualquer pessoa abre no celular ou no computador, sem login.
 *
 * Como publicar: veja pagina_web/COMO_PUBLICAR.md.
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Viagem Andes — Peru, Bolívia e Chile')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
