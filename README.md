# API simples em Node + Express

API educativa com dados em memória para demonstrar conceitos básicos de Node, Express e JSON.

Estrutura sugerida (já aplicada neste repositório):

```
seu-projeto/
package.json
src/
	server.js   # servidor Express (ES Modules)
	data.js     # dados em memória e funções (exported)
index.js      # inicia o servidor (delegando para src/server.js)
```

Endpoints:

- GET / -> mensagem de boas-vindas
- GET /projects -> lista todos os projetos
- GET /projects/:id -> retorna um projeto específico
- POST /projects -> cria um novo projeto: { title, description }
- POST /projects/:id/tasks -> adiciona uma task ao projeto: { task }

Como rodar:

1. Instalar dependências:

```powershell
npm install
```

2. Rodar em modo de desenvolvimento (nodemon):

```powershell
npm run dev
```

3. Rodar com o script de produção:

```powershell
npm start
```

Observações: usa ES Modules ("type": "module" no package.json). Dados são mantidos em memória e serão perdidos ao reiniciar o servidor.
