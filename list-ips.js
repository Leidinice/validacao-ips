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

// Chama a função para listar os IPs
const ips = getLocalIPs();
console.log("IPs encontrados na rede:", ips);
