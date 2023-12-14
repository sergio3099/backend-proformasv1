const { Router }= require('express');
const { check} =  require('express-validator');
const {
    crearTipoVidrio,
    actualizarTipoVidrio,
    borrarTipoVidrio,
    obtenerTipoVidrio,
    obternerTipoVidrios
} = require ('../controllers').TipoVidrio
const { validarCampos } = require('../middlewares');

const router  = Router();

router.get('/', obternerTipoVidrios );
router.get('/:id' , check('id','El id no es válidio').isMongoId()
, validarCampos  , obtenerTipoVidrio );
router.post('/', check('nombre','El nombre es requerido').not().isEmpty() 
, validarCampos ,crearTipoVidrio);
router.put('/:id', check('id', 'No es un ID válido').isMongoId() 
, validarCampos , actualizarTipoVidrio);
router.delete('/:id', 
check('id', 'No es un id válido').isMongoId()
,validarCampos , borrarTipoVidrio);

module.exports = router;