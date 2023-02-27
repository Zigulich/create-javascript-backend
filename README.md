# create-javascript-backend

Estrutura de código padrão para iniciar projetos de API REST com Typescript.

`Desde as últimas atualizações, tem-se como objetivo tornar-se simples e flexível, agilizando o tempo de criação da base do projeto.`

[![GitHub license](https://img.shields.io/github/license/Zigulich/create-javascript-backend)](https://github.com/Zigulich/create-javascript-backend/blob/master/LICENSE.md)

## 💻 Dependências

##### O projeto possui as seguintes dependências:

-   cors
-   date-fns
-   dotenv
-   express
-   jsonwebtoken

> Use o comando **yarn upgrade** para atualizar as dependências para última versão estável

## 📄 Estrutura de pastas

A estrutura de pastas padrão do projeto, utilizando como inspiração a arquitetura MVC. Todas estas as pastas podem ser acessadas usando um `@` no início, usando `Typescript Paths`.

    ├───sources (Arquivos da aplicação)
        ├───controllers
        ├───functions
        ├───models
    	├───services
    	├───config
        └───views

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
    JWT_SECRET = ''               # Secret de autenticação do JWT
    PORT =  3000                  # Porta em que o servidor será aberto

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
