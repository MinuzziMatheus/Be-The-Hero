const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
/*
*METODOS HTTP:
*
* GET: Buscar/listar uma informação
* POST: Criar uma informação
* PUT: Alterar uma informação
* DELETE: Deletar uma informação
* */

/*
* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/

/**
 * SQL: Mysql, SQLite, PostgreSQL, Oracle, Miecrosoft SQL Server
 * NOSQL: MongoDB, CouchDB, etc
 * 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where();
 */





