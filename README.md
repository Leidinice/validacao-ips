# Projeto Playwright - Acesso aos IPs da Rede Local

Este projeto utiliza o Playwright para acessar e validar os IPs da rede local. Ele primeiro lista os IPs disponíveis em sua rede local e, em seguida, acessa cada IP via HTTP para verificar se o serviço está respondendo.

## Funcionalidades

- **Listagem de IPs locais**: Obtém os IPs das interfaces de rede (excluindo a interface `loopback`).
- **Validação de IPs com Playwright**: Acessa cada IP na rede local utilizando o Playwright, simulando uma requisição HTTP para verificar se o serviço responde.

## Requisitos

- **Node.js**: Versão 14 ou superior.
- **Playwright**: Biblioteca para automação de navegação e testes em navegadores.

## Instalação

1. **Clonar o repositório**:

   Se você ainda não tem o repositório, clone-o:

   ```bash
   git clone https://github.com/SEU_USUARIO/projeto-playwright.git
   cd projeto-playwright

## Instalar dependências:
Para instalar as dependências necessárias, execute:

npm install


## Estrutura do Projeto
A estrutura do projeto é a seguinte:

projeto-playwright/
│
├── node_modules/           # Diretório de dependências do npm
├── package.json            # Arquivo de configuração do npm
├── list-ips.js             # Script para listar os IPs da rede local
├── tests/                  # Pasta para os testes
│   └── access-ips.spec.js  # Teste Playwright para acessar os IPs
└── README.md               # Este arquivo


## Scripts

list-ips.js: Script que lista os IPs da rede local.

tests/access-ips.spec.js: Arquivo de testes Playwright que acessa os IPs da rede local e valida se eles estão respondendo via HTTP.

## Como Usar
1. Listar os IPs da Rede Local
Para apenas listar os IPs da sua rede local, execute:


node list-ips.js
Esse comando irá buscar as interfaces de rede e listar os IPs encontrados.

2. Testar os IPs com Playwright
Para executar os testes e verificar se os IPs estão acessíveis via HTTP, use:


npx playwright test
Isso irá rodar o Playwright, que vai tentar acessar cada IP listado pela função getLocalIPs() e verificar se o serviço responde.

3. Especificações dos Testes
Os testes estão definidos em tests/access-ips.spec.js. O Playwright tenta acessar os IPs da rede local de forma assíncrona e imprime o status de cada tentativa de conexão.

## Dependências
Playwright: Playwright - Biblioteca de automação para navegadores.

Network: Network - Biblioteca usada para listar interfaces de rede (substituída pelo os.networkInterfaces() na versão atual).q