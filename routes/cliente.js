const { Router }= require('express');
const { check} =  require('express-validator');

const {
    crearCliente,
    actualizarCliente,
    borrarCliente,
    obtenerCliente,
    obternerCLientes
} = require ('../controllers').Cliente
const { validarCampos } = require('../middlewares');

const router  = Router();

router.get('/', obternerCLientes );
router.get('/:id' , check('id','El id no es válidio').isMongoId()
, validarCampos  , obtenerCliente );
router.post('/', check('nombre','El nombre es requerido').not().isEmpty() 
, validarCampos ,crearCliente);
router.put('/:id', check('id', 'No es un ID válido').isMongoId() 
, validarCampos , actualizarCliente);
router.delete('/:id', 
check('id', 'No es un id válido').isMongoId()
,validarCampos , borrarCliente);

module.exports = router;