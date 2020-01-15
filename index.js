const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
//MÉTODOS HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: rec.query(Filtros, paginação)
//Routes params: request.params (Identificar recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro )

//MongoDB (Não-relacional )

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'testando tudo isso!' });
});

app.listen(3333);