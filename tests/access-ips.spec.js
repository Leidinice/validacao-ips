// tests/access-ips.spec.js
const { test, expect } = require('@playwright/test');
const os = require('os');

// Função síncrona para obter os IPs locais
function getLocalIPs() {
    const interfaces = os.networkInterfaces();  // Obtém informações sobre as interfaces de rede
    const ips = [];

    // Itera pelas interfaces e adiciona os IPs
    for (const interfaceName in interfaces) {
        for (const interfaceDetails of interfaces[interfaceName]) {
            // Ignora interfaces internas como a "loopback"
            if (interfaceDetails.family === 'IPv4' && !interfaceDetails.internal) {
                ips.push(interfaceDetails.address);
            }
        }
    }

    return ips;
}

// Teste Playwright para acessar os IPs
test.describe('Teste de Acesso aos IPs da Rede Local', () => {
    let ips;

    // Antes de rodar os testes, pega os IPs locais
    test.beforeAll(() => {
        ips = getLocalIPs();  // Chama a função de forma síncrona
        console.log('IPs encontrados:', ips);
    });

    // Teste para acessar os IPs encontrados
    test('Verificar acesso aos IPs', async ({ page }) => {
        for (let ip of ips) {
            const url = `http://${ip}`;
            console.log(`Acessando: ${url}`);

            // Tenta acessar o IP no navegador
            try {
                await page.goto(url, { waitUntil: 'load', timeout: 10000 });
                console.log(`IP ${ip} acessado com sucesso!`);
            } catch (error) {
                console.error(`Erro ao acessar ${ip}: ${error.message}`);
            }
        }
    });
});
