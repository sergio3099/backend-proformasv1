const {response} = require('express')
const {Cliente} = require('../model')


const obternerCLientes = async (req, res= response) => {
    const { limite= 100  , desde=0   } =  req.query;
    const query= { estado:true   };
    const [ total, clientes ] =  await Promise.all(
        [
            Cliente.countDocuments(query),
            Cliente.find(query)
            .skip(desde)
            .limit(limite)
        ]
    )
    res.json({
        total,
        clientes
    })
}

const obtenerCliente = async (req,res= response)=>{
    const {id} =req.params
    const cliente =  await Cliente.findById(id);
    res.json(cliente);
}

const crearCliente = async (req,res)=>{
    const {estado, ...body } =req.body;
    const existeCliente= await Cliente.findOne({nombre:body.nombre});
    if (existeCliente)
    {
        return res.status(400).json({
            message:`El cliente con ese nombre ${body.nombre} ya se encuentra registrado`
        })
    }
    const cliente = new Cliente(body);
    const clienteNuevo= await cliente.save();
    return res.status(201).json(clienteNuevo);

}

const actualizarCliente= async (req,res= response)=>{
    const {id}= req.params;
    const { estado, ...body } =  req.body;
    const clienteModificado= 
    await Cliente.findByIdAndUpdate(id, body, {new:true});
    res.json(clienteModificado);
}
const borrarCliente= async (req,res= response) =>{
    const {id}= req.params;
    const clienteEliminado =
      await Cliente.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(clienteEliminado)

}

module.exports= {
    obternerCLientes,
    obtenerCliente,
    crearCliente,
    actualizarCliente,
    borrarCliente
}