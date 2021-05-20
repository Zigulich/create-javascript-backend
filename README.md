# create-javascript-backend

Estrutura de código padrão para iniciar projetos de API REST com Javascript no backend.

> A estrutura do projeto, funcionalidades e padrões de código é baseada nos padrões da [Rocketseat](https://blog.rocketseat.com.br/ 'Rocketseat').

![GitHub repo size](https://img.shields.io/github/repo-size/zigulich/create-javascript-backend/README-template?style=for-the-badge)

## 💻 Dependências

##### O projeto possui as seguintes dependências:

-   cors

-   date-fns

-   dotenv

-   express

-   jsonwebtoken

-   knex

-   mysql2 _( Por padrão dos projetos)_

##### Dependências de desenvolvedor

-   @types/cors

-   @types/express

-   @types/jsonwebtoken

-   ts-node

-   ts-node-dev

-   typescript

> Use o comando **yarn upgrade** para atualizar as dependências para última versão estável

## 📄 Estrutura de pastas

A estrutura de pastas padrão do projeto, utilizando como inspiração a arquitetura MVC

    ├───bin (Binários da aplicação, não incluidos no build)
    │   ├───create-migration
    │   ├───create-mvc
    │   └───create-seed
    └───sources (Arquivos da aplicação)
        ├───connection (Informações da conexão)
        │   ├───migrations
        │   └───seeds
        ├───controller (Controladores)
        ├───functions (Funções úteis para aplicação)
        ├───model (Modelos do Typescript)
        └───view (Rotas do express)

## 🚀 Instalando create-javascript-backend

Para instalar o **create-javascript-backend**, siga estas etapas:

Linux, macOS e Windows:

```

git clone https://github.com/Zigulich/create-javascript-backend <nome_projeto>

cd <nome_projeto>

yarn install ou npm install

yarn upgrade ou npm update

```

Após a instalação dos pacotes, faça a configuração do projeto no arquivo de variáveis de ambiente **.env**

**Configurações do DotEnv:**

    /*.env*/

    CONNECTION_CLIENT =  'mysql2' # Knex Client (ver documentação)
    CONNECTION_HOST = 'localhost' # Host do banco (deixe em branco caso necessário)
    CONNECTION_USER = 'root'      # Nome de usuário (deixe em branco caso necessário)
    CONNECTION_PASS = ''          # Senha de acesso (deixe em branco caso necessário)
    CONNECTION_DB = 'finan'       # Nome do banco de dados (MySQL) ou localização do arquivo (SQLite)

    JWT_SECRET = ''               # Secret de autenticação do JWT

    SERVER_PORT =  3000           # Porta em que o servidor será aberto

> Conexão com banco de dados Oracle, PostgreSQL e Microsoft SQL Server
> não foram testadas.

## ☕ Funções

Para usar **create-javascript-backend**, siga estas etapas:

**Criação de rotas:**

**Atenção!** os comentários _{ROUTE_IMPORT}_ e _{ROUTE_CONFIG}_ **não** podem ser removidos do arquivo _sources/index.ts_, pois os mesmos são responsáveis por adicionar o arquivo de rotas automaticamente na aplicação. (Entenda melhor no arquivo _bin/create-mvc/index.js:29_)

```
yarn create-mvc Usuarios
```

> A função irá criar os arquivos _UsuariosController_, _UsuariosModel_ e
> _UsuariosRoute_, dentro de suas respectivas pastas, além de criar a rota
> _'/usuarios'_ dentro do _index.ts_

**Criando modelo de Migration:**

```
yarn create-migration usuarios
```

> Será criando o arquivo **00_create_usuarios** dentro da pasta
> _/sources/connection/migrations_, com código exemplo para criação da tabela _usuários_.

**Criando modelo de Seed:**

```
yarn create-seed usuarios
```

> Será criando o arquivo **00_usuarios** dentro da pasta
> _/sources/connection/seeds_, com código exemplo para criação de dados na tabela _usuários_.

**Adicionando o Electron na aplicação:**

```
yarn add-electron
```

> Adiciona o pacote ElectronJS junto ao Electron Builder, além de fazer as configurações básicas.
> Será criado o arquivo _index.js_ na pasta raiz do projeto, com as configurações do Electron, além de adicionar os scripts _electron_ e _electron:build_ para inicialização e build, respectivamente.

## 📫 Contribuindo

Para contribuir com **create-javascript-backend**, siga estas etapas:

1. Bifurque este repositório.

2. Crie um branch: `git checkout -b <nome_branch>`.

3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`

4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`

5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 📝 Licença

O projeto foi desenvolvido com o intuito de agilizar o processo inicial de desenvolvimento do backend de uma aplicação.

Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#create-javascript-backend)<br>
