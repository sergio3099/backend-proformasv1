const {response} = require('express')
const {Medida} = require('../model')


const obternerMedidas = async (req, res= response) => {
    const { limite= 100  , desde=0   } =  req.query;
    const query= { estado:true   };
    const [ total, medidas ] =  await Promise.all(
        [
            Medida.countDocuments(query),
            Medida.find(query)
            .skip(desde)
            .limit(limite)
        ]
    )
    res.json({
        total,
        medidas
    })
}

const obtenerMedida = async (req,res= response)=>{
    const {id} =req.params
    const medida =  await Medida.findById(id);
    res.json(medida);
}

const crearMedida = async (req,res)=>{
    const {estado, ...body } =req.body;
    const medida = new Medida(body);
    const medidaNueva= await medida.save();
    return res.status(201).json(medidaNueva);
}

const actualizarMedida= async (req,res= response)=>{
    const {id}= req.params;
    const { estado, ...body } =  req.body;
    const medidaModificada= 
    await Medida.findByIdAndUpdate(id, body, {new:true});
    res.json(medidaModificada);
}
const borrarMedida= async (req,res= response) =>{
    const {id}= req.params;
    const medidaEliminada =
      await Medida.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(medidaEliminada)

}

module.exports= {
    obternerMedidas,
    obtenerMedida,
    crearMedida,
    actualizarMedida,
    borrarMedida
}