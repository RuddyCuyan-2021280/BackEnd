const { Router } = require('express');
const { getUsuario, postUsuario, putUsuario, deleteUsuario } = require('../controllers/usuarioController');
const router = Router();

router.get('/', getUsuario)

router.post('/agregar', postUsuario)

router.put('/editar/:id', putUsuario)

router.delete('/eliminar/:id', deleteUsuario)

module.exports = router;