# API Express com TypeScript

## Descrição

Este projeto implementa uma **API RESTful** utilizando **Express.js**, **TypeScript**, e **MongoDB** para gerenciar influenciadores digitais. O objetivo da aplicação é permitir a criação, leitura, atualização e remoção (CRUD) de 
influenciadores na base de dados. As rotas disponíveis são descritas abaixo.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para criação de APIs REST.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **MongoDB**: Banco de dados NoSQL.
- **CORS**: Para permitir requisições entre diferentes origens.

## Funcionalidades

A API disponibiliza as seguintes rotas para interação com a coleção `influencers` no banco MongoDB:

### 1. **GET /influencers**

**Descrição**: Lista todos os influenciadores digitais cadastrados na coleção `influencers`.

### 2. **POST /influencers**

**Descrição**: Cria um novo influenciador digital na coleção `influencers`.

### 3. **PUT /influencers/:id**

**Descrição**: Atualiza as informações de um influenciador digital existente na coleção `influencers` usando o seu ID.

### 4. **DELETE /influencers/:id**

**Descrição**: Deleta um influenciador digital da coleção `influencers` usando seu ID.
