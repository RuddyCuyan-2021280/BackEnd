require('dotenv').config()

//Importacion de la configuaracion de la clase server en la carpeta models
const Server = require('./models/server');

const servidorIniciado = new Server();

servidorIniciado.listen();
