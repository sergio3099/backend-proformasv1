const { Router }= require('express');
const { check} =  require('express-validator');

const {
    crearMedida,
    actualizarMedida,
    borrarMedida,
    obtenerMedida,
    obternerMedidas
} = require ('../controllers').Medida
const { validarCampos } = require('../middlewares');

const router  = Router();

router.get('/', obternerMedidas );
router.get('/:id' , check('id','El id no es válidio').isMongoId()
, validarCampos  , obtenerMedida );
router.post('/', check('nombre','El nombre es requerido').not().isEmpty() 
, validarCampos ,crearMedida);
router.put('/:id', check('id', 'No es un ID válido').isMongoId() 
, validarCampos , actualizarMedida);
router.delete('/:id', 
check('id', 'No es un id válido').isMongoId()
,validarCampos , borrarMedida);

module.exports = router;