const { Router }= require('express');
const { check} =  require('express-validator');

const {
    crearProforma,
    actualizarProforma,
    borrarProforma,
    obtenerProforma,
    obternerProformas,
} = require ('../controllers').Proforma
const { validarCampos } = require('../middlewares');

const router  = Router();

// router.get('/', obternerProformas );
router.get('/', obternerProformas );
router.get('/:id' , check('id','El id no es válidio').isMongoId()
, validarCampos  , obtenerProforma );
router.post('/', check('nombre','El nombre es requerido').not().isEmpty() 
, validarCampos ,crearProforma);
router.put('/:id', check('id', 'No es un ID válido').isMongoId() 
, validarCampos , actualizarProforma);
router.delete('/:id', 
check('id', 'No es un id válido').isMongoId()
,validarCampos , borrarProforma);

module.exports = router;