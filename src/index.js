const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://marquissantos:melhorsantos123@cluster0-sjmrg.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
//MÉTODOS HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: rec.query(Filtros, paginação)
//Routes params: request.params (Identificar recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro )

//MongoDB (Não-relacional )


app.listen(3333);