const {response} = require('express')
const {Rol} = require('../model')


const obternerRoles = async (req, res= response) => {
    const { limite= 100  , desde=0   } =  req.query;
    const query= { estado:true   };
    const [ total, roles ] =  await Promise.all(
        [
            Rol.countDocuments(query),
            Rol.find(query)
            .skip(desde)
            .limit(limite)
        ]
    )
    res.json({
        total,
        roles
    })
}

const obtenerRol = async (req,res= response)=>{
    const {id} =req.params
    const rol =  await Rol.findById(id);
    res.json(rol);
}

const crearRol = async (req,res)=>{
    const {estado, ...body } =req.body;
    const existeRol= await Rol.findOne({nombre:body.nombre});
    if (existeRol)
    {
        return res.status(400).json({
            message:`El cliente con ese nombre ${body.nombre} ya se encuentra registrado`
        })
    }
    const rol = new Rol(body);
    const rolNuevo= await rol.save();
    return res.status(201).json(rolNuevo);

}

const actualizarRol= async (req,res= response)=>{
    const {id}= req.params;
    const { estado, ...body } =  req.body;
    const rolModificado= 
    await Rol.findByIdAndUpdate(id, body, {new:true});
    res.json(rolModificado);
}
const borrarRol = async (req,res= response) =>{
    const {id}= req.params;
    const rolEliminado =
      await Rol.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(rolEliminado)

}

module.exports= {
    obternerRoles,
    obtenerRol,
    crearRol,
    actualizarRol,
    borrarRol
}