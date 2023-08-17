//Configuracion del servidor (base de datos)
const express = require('express')
const cors = require('cors');
const dbConection = require('../database/config');

class Server {
    constructor() {

        //variables de configuracion
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios'

        this.conectarDB();

        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    //Metodo de conexion con MONGODB
    async conectarDB(){
        await dbConection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo antes del body
        this.app.use(express.json());

        //Directorio publico del proyecto
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuario'))
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}
module.exports = Server; 