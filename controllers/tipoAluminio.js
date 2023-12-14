const {response} = require('express')
const {TipoAluminio} = require('../model')


const obternerTipoAluminios = async (req, res= response) => {
    const { limite= 100  , desde=0   } =  req.query;
    const query= { estado:true   };
    const [ total, tipoAluminios ] =  await Promise.all(
        [
            TipoAluminio.countDocuments(query),
            TipoAluminio.find(query)
            .skip(desde)
            .limit(limite)
        ]
    )
    res.json({
        total,
        tipoAluminios
    })
}

const obtenerTipoAluminio = async (req,res= response)=>{
    const {id} =req.params
    const tipoAluminio =  await TipoAluminio.findById(id);
    res.json(tipoAluminio);
}

const crearTipoAluminio = async (req,res)=>{
    const {estado, ...body } =req.body;
    const existeTipoAluminio= await TipoAluminio.findOne({nombre:body.nombre});
    if (existeTipoAluminio)
    {
        return res.status(400).json({
            message:`El tipo de aluminio con ese nombre ${body.nombre} ya se encuentra registrado`
        })
    }
    const tipoAluminio = new TipoAluminio(body);
    const tipoAluminioNuevo= await tipoAluminio.save();
    return res.status(201).json(tipoAluminioNuevo);

}

const actualizarTipoAluminio= async (req,res= response)=>{
    const {id}= req.params;
    const { estado, ...body } =  req.body;
    const tipoAluminioModificado= 
    await TipoAluminio.findByIdAndUpdate(id, body, {new:true});
    res.json(tipoAluminioModificado);
}
const borrarTipoAluminio= async (req,res= response) =>{
    const {id}= req.params;
    const tipoAluminioEliminado =
      await TipoAluminio.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(tipoAluminioEliminado)

}

module.exports= {
    obternerTipoAluminios,
    obtenerTipoAluminio,
    crearTipoAluminio,
    actualizarTipoAluminio,
    borrarTipoAluminio
}