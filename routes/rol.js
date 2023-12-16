const { Router }= require('express');
const { check} =  require('express-validator');

const {
    crearRol,
    actualizarRol,
    borrarRol,
    obtenerRol,
    obternerRoles
} = require ('../controllers').Rol
const { validarCampos } = require('../middlewares');

const router  = Router();

router.get('/', obternerRoles );
router.get('/:id' , check('id','El id no es válidio').isMongoId()
, validarCampos  , obtenerRol );
router.post('/', check('nombre','El nombre es requerido').not().isEmpty() 
, validarCampos ,crearRol);
router.put('/:id', check('id', 'No es un ID válido').isMongoId() 
, validarCampos , actualizarRol);
router.delete('/:id', 
check('id', 'No es un id válido').isMongoId()
,validarCampos , borrarRol);

module.exports = router;