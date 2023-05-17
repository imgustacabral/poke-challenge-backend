# 🚀 PokeAPI NestJS com Domain Driven Design 🚀

Este repositório contém uma API para obter as habilidades de pokemons, desenvolvida com NestJS e seguindo os princípios de Domain Driven Design.
Além disso, foram criados testes unitários e e2e para garantir a qualidade do código.
Foi utilizado Swagger para a documentação.

## 📦 Instalação


Baixe a imagem

```bash
git clone https://github.com/imgustacabral/poke-challenge-backend.git
cd poke-challenge-backend.git
```

### Via Docker

É necessário ter o Docker instalado em sua máquina. Após isso basta rodar os comandos abaixo.

Criar a imagem

```bash
docker build -t poke-challenge .
```

Rodar o container

```bash
docker run -p 3000:3000 poke-challenge 
```


### Via NPM

É necessário ter o Node.js 18.16 e o npm instalados em sua máquina. Após isso, basta clonar o repositório e instalar as dependências:

```bash
npm install
```

## 🎮 Utilização

Para rodar a aplicação em modo de desenvolvimento, execute o seguinte comando:

```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`

## 🚨 Testes

Para rodar os testes unitários, execute o seguinte comando:

```bash
npm run test
npm run test:cov
```

Para rodar os testes e2e, execute o seguinte comando:

```bash
npm run test:e2e
```

## 📚 Documentação

A documentação pode ser acessada em `http://localhost:3000/api`
Certifique-se de que o app está rodando em modo de desenvolvimento!

