// playwright.config.js

module.exports = {
  // Define o modo de execução (pode ser 'run' ou 'run' com outros parâmetros)
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }],  // Gera um relatório HTML
    ['json', { outputFile: 'playwright-report/results.json' }]        // Gera um relatório JSON
  ],
  // Outras configurações do Playwright
  use: {
    headless: false,  // Define se o navegador deve ser executado em modo headless
    viewport: { width: 1280, height: 720 },
    // Outros parâmetros de configuração podem ser adicionados aqui
  },
};
