const {response} = require('express')
const {TipoVidrio} = require('../model')


const obternerTipoVidrios = async (req, res= response) => {
    const { limite= 100  , desde=0   } =  req.query;
    const query= { estado:true   };
    const [ total, tiposVidrios ] =  await Promise.all(
        [
            TipoVidrio.countDocuments(query),
            TipoVidrio.find(query)
            .skip(desde)
            .limit(limite)
        ]
    )
    res.json({
        total,
        tiposVidrios
    })
}

const obtenerTipoVidrio = async (req,res= response)=>{
    const {id} =req.params
    const tipoVidrio =  await TipoVidrio.findById(id);
    res.json(tipoVidrio);
}

const crearTipoVidrio = async (req,res)=>{
    const {estado, ...body } =req.body;
    const existeTipoVidrio= await TipoVidrio.findOne({nombre:body.nombre});
    if (existeTipoVidrio)
    {
        return res.status(400).json({
            message:`El tipo de vidrio con ese nombre ${body.nombre} ya se encuentra registrado`
        })
    }
    const tipoVidrio = new TipoVidrio(body);
    const tipoVidrioNuevo= await tipoVidrio.save();
    return res.status(201).json(tipoVidrioNuevo);

}

const actualizarTipoVidrio= async (req,res= response)=>{
    const {id}= req.params;
    const { estado, ...body } =  req.body;
    const tipoVidrioModificado= 
    await TipoVidrio.findByIdAndUpdate(id, body, {new:true});
    res.json(tipoVidrioModificado);
}
const borrarTipoVidrio= async (req,res= response) =>{
    const {id}= req.params;
    const tipoVidrioEliminado =
      await TipoVidrio.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(tipoVidrioEliminado)

}

module.exports= {
    obternerTipoVidrios,
    obtenerTipoVidrio,
    crearTipoVidrio,
    actualizarTipoVidrio,
    borrarTipoVidrio
}