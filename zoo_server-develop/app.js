/** Imports */
const express = require('express');
const { Client } = require('pg');

/** Inicialización de variables y constantes */
const app = express();

const dbClient = new Client({
  connectionString: "postgresql://postgres:1234@localhost:5432/zoo"
});

dbClient.connect(err => {
  if (err)
    console.log(err);
  else
    console.log("Conectado a la base de datos")
});

/** Middleware */
app.use(express.json());
// app.use(express.static("build"));

/** Endpoints */

// app.get('/animals/:id', (req, res) => {
//   const { id } = req.params
//   const values = [ id ];
//   const sql = 'SELECT * FROM "Animals" WHERE id=$1';

//   dbClient.query(sql, values, (err, dbResponse) => {
//     let response = {};
//     let status = 200;
//     if(err){
//       status = 500;
//       response = { dat: null, message: err, status};
//     }

//     else if(dbResponse.rows.lenght === 0){
//       status = 404;
//       response = {data: null, message: "No se encontro el animal especifiacdo", status};
//     }

//     else{
//       response = {data: dbResponse.rows, message: "Se encontro el animal indicado exitosamente", status};
//     }
//   });
// });

/** Endpoint principal */
app.get('/', (req, res) => {
  res.sendFile('/build/index.html');
});

/** Get */

app.get('/animals', (req, res) => {
  const sql = 'SELECT * FROM "Animales"';
  let status = 200;

  dbClient.query(sql, (err, db_response) => {
    let response = {};
    if(err){
      status = 500;
      response = {data: null, message: err, status};
    } else if(db_response.rows.length === 0){
      status = 404
      response = {data: null, message: 'No se encontraron registros', status};
    } else{
      response = {data: db_response,message: 'Se encontraron los animales', status};
    }

    res.json(response);
  });
});

app.get('/animalsc/:categoria', (req, res) => {
  let { categoria } = req.params;
  const values = [ categoria ];
  var sql = 'SELECT * FROM "Animales" WHERE categoria = $1';
  let status = 200;
  dbClient.query(sql, values, (err, db_response) => {
    let response = {};
    console.log(sql)
    if(err){
      status = 500;
      response = {data: null, message: err, status};
    } else if(db_response.rows.length === 0){
      status = 404
      response = {data: null, message: 'No se encontraron los animales con dicha categoira', status};
    } else{
      response = {data: db_response,message: 'Se encontraron animales exitosamente con dicha categoria', status};
    }

    res.json(response);
  });
});

app.get('/animalsi/:id', (req, res) => {
  let { id } = req.params;
  const values = [ id ];
  var sql = 'SELECT * FROM "Animales" WHERE id = $1';
  let status = 200;
  dbClient.query(sql, values, (err, db_response) => {
    let response = {};
    console.log(sql)
    if(err){
      status = 500;
      response = {data: null, message: err, status};
    } else if(db_response.rows.length === 0){
      status = 404
      response = {data: null, message: 'No se encontraron los animales con dicha categoira', status};
    } else{
      response = {data: db_response,message: 'Se encontraron animales exitosamente con dicha categoria', status};
    }

    res.json(response);
    console.log(response)
  });
});

app.get('/json', (req, res) => {
  res.json({message: 'Esta ruta funciona'});
});


/** Inicialización del servidor */
app.listen(5000, () => {
  console.log('El servidor se ha iniciado y esta escuchando en el puerto 5000');
});