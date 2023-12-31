const mongoose = require('mongoose');

const dbConection = async() =>{

    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log('Base de datos conectada correctamente');

    } catch (error) {
        console.log(error)
        throw new Error('Error al conectar con la base de datos')
    }

}

module.exports =  dbConection;