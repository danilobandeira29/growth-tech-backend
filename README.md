# Sumário
- [Sobre](#-Sobre)
- [Tecnologias](#-Tecnologias)
- [Formatadores de Código](#-Formatadores-de-Código)
- [Banco de Dados](#-Banco-de-Dados)
- [Instalando as Dependências](#-Instalando-as-Dependências)
- [Inicializando o Projeto](#-Inicializando-o-Projeto)
- [Testes](#-Testes)
- [Rotas](#-Rotas)

## Sobre
Essa aplicação permite criação de usuário, criação de post e listagem de post dos usuários.

## Tecnologias
- NodeJS
- ExpressJS
- Typescript
- TDD
- SOLID
- Jest
- TypeORM(MySQL)

## Formatadores de código
- ESLint
- Prettier
- EditorConfig

## Banco de Dados
Necessário:

- MySQL

- Como o MySQL no computador, configurar o arquivo `./ormconfig.json`

```json
{
	"name": "default",
	"type": "mysql",
	"host": "localhost",
	"port": 3306,
	"username": "root",
	"database": "db_growth_tech",
	"entities": [
		 "src/infra/typeORM/entity/**/*.ts"
	],
	"migrations": [
		 "src/infra/typeORM/migration/**/*.ts"
	],
	"cli": {
		"migrationsDir": "src/infra/typeORM/migration"
}
}
```
- **port**: porta default do MySQL, ou utilizar a porta que condiz com a utilizada na sua instância do MySQL
- **username**: username default do MySQL, ou utilizar o username que condiz com o utilizado na sua instância do MySQL
- **password**: caso seu usuário do MySQL possua um password, basta adicionar um atributo `password` com o valor equivalente a sua senha de usuário do MySQL
- **database**: deve ser criado um banco de dados na instância do MySQL de mesmo nome

## Instalando as Dependências
- Abra o terminal na pasta do projeto e execute:
```bash
  ## instalar as dependências(ou você pode executar 'npm install')
  $ yarn

  ## rodar as migrations
  $ yarn typeorm migration:run
```

## Inicializando o Projeto
- Abra o terminal na pasta do projeto e execute:
```bash
  ## inicializar o projeto (ou você pode executar 'npm run dev')
  $ yarn dev
```

## Testes
- Abra o terminal na pasta do projeto e execute:
```bash
  ## inicializar o projeto (ou você pode executar 'npm run test')
  $ yarn test

  ## gerar pasta com arquivo de cobertura de testes (ou você pode executar 'npm run test --coverage')
  $ yarn test --coverage
```
- E abra `./coverage/lcov-report/index.hml` no seu navegador para ver a cobertura dos testes

## Rotas
- **POST**: `/user` envia uma request com json no body que contenha os dados de um usuário. Retorna um objeto `data` com os dados do usuário juntamente com o `id` do mesmo.
- **POST**: `/user/:userId/post` envia uma request com userId via `route params`, e um json no body que contenha os dados para criação de um post. Retorna um objeto `data` com os dados do post juntamente com o `id` do mesmo.
- **GET**: `/post` retorna um objeto `data` com todos os post.

**POST** `/user` exemplo:
```json
//request body

{
  "name": "John Doe",
  "username": "John",
  "email": "john@doe.com",
  "phone": "(000) 00000-0000",
  "address": {
    "street": "my street",
    "suite": "22",
    "city": "my city",
    "zipcode": "00000-000",
    "geo": {
      "lat": "90237103",
      "lng": "38179832"
    }
  },
  "website": "www.mywebsite.com",
    "company": {
      "name": "my company name",
      "catchPhase": "something",
      "bs": "something"
	}
}

//response success, statusCode: 200
{
  "data": {
    "name": "John Doe",
    "username": "John",
    "email": "john@doe.com",
    "phone": "(000) 00000-0000",
    "address": {
    "street": "my street",
    "suite": "22",
    "city": "my city",
    "zipcode": "00000-000",
    "geo": {
      "lat": "90237103",
      "lng": "38179832"
    }
  },
  "website": "www.mywebsite.com",
    "company": {
      "name": "my company name",
      "catchPhase": "something",
      "bs": "something"
	},
  "id": 1,
  "created_at": "2021-02-20T15:09:50.000Z",
  "updated_at": "2021-02-20T15:09:50.000Z"
}

//ou response error, statusCode: 400
{
  "data": {
    "error": "Email is already used!"
	}
}
```

**POST** `/user/:userId/post` exemplo:
```json
//request body
{
  "title": "My post title",
  "body": "My post body"
}

//response success, statusCode: 200
{
  "data": {
    "userId": 1,
    "title": "My post title",
    "body": "My post body",
    "id": 1,
    "created_at": "2021-02-20T15:19:50.000Z",
    "updated_at": "2021-02-20T15:19:50.000Z"
  }
}

//or response error, statusCode: 400
{
  "data": {
    "error": "User not found"
  }
}
```

**GET** `/post` exemplo:
```json
// request sem body

//response sucess, statusCode: 200
{
  "data": [
    {
      "id": 1,
      "userId": 1,
      "title": "My post title",
      "body": "My post body",
     	"created_at": "2021-02-20T15:19:50.000Z",
    	"updated_at": "2021-02-20T15:19:50.000Z",
      "user": {
        "name": "John Doe",
        "company": {
          "name": "my company name"
        }
      }
    }
  ]
}

//response sucess mas sem dados, statusCode: 200
{
  "data": []
}
```

**Developed by/Desenvolvido por**
<a href="https://www.linkedin.com/in/danilo-bandeira-4411851a4/">**Danilo Bandeira</a>**
