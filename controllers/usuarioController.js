const {response, request} = require('express');


const Usuario = require('../models/usuarioModel')


const getUsuario = (req = request, res = response) => {
    
    res.json({
        msg: 'GET de Usuario'
    })
}

const postUsuario = async(req = request, res = response) => {

    const {nombre, carnet, direccion, sexo, telefono, fechaNacimiento, carrera, generoPoesia} = req.body;
    const usuariodb = new Usuario({nombre, carnet, direccion, sexo, telefono, fechaNacimiento,
        carrera, generoPoesia});

    await usuariodb.save();

    res.json({
        msg: 'POST de Usuario',
        nombre, carnet, direccion, telefono, sexo, fechaNacimiento,
        carrera, generoPoesia
    })
}

const putUsuario = (req = request, res = response) => {

    const id = req.params;

    res.json({
        msg: 'PUT de Usuario',
        id
    })
}

const deleteUsuario = (req = request, res = response) => {
    res.json({
        msg: 'DELETE de Usuario'
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}