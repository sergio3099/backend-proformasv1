const { Router }= require('express');
const { check} =  require('express-validator');

const {
    crearTipoAluminio,
    actualizarTipoAluminio,
    borrarTipoAluminio,
    obtenerTipoAluminio,
    obternerTipoAluminios
} = require ('../controllers').TipoAluminio
const { validarCampos } = require('../middlewares');

const router  = Router();

router.get('/', obternerTipoAluminios );
router.get('/:id' , check('id','El id no es válidio').isMongoId()
, validarCampos  , obtenerTipoAluminio );
router.post('/', check('nombre','El nombre es requerido').not().isEmpty() 
, validarCampos ,crearTipoAluminio);
router.put('/:id', check('id', 'No es un ID válido').isMongoId() 
, validarCampos , actualizarTipoAluminio);
router.delete('/:id', 
check('id', 'No es un id válido').isMongoId()
,validarCampos , borrarTipoAluminio);

module.exports = router;