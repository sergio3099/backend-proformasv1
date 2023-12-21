const { response } = require('express')
const { Proforma } = require('../model')
// const nodemailer = require('nodemailer')




const obternerProformas = async (req, res = response) => {
    const { limite = 100, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, proformas] = await Promise.all(
        [
            Proforma.countDocuments(query),
            Proforma.find(query)
                .skip(desde)
                .limit(limite)
        ]
    )
    res.json({
        total,
        proformas
    })
}

const obtenerProforma = async (req, res = response) => {
    const { id } = req.params
    const proforma = await Proforma.findById(id);
    res.json(proforma);
}

const crearProforma = async (req, res) => {
    const { estado, ...body } = req.body;
    const proforma = new Proforma(body);
    const proformaNueva = await proforma.save();


    return res.status(201).json(proformaNueva);
}

const actualizarProforma = async (req, res = response) => {
    const { id } = req.params;
    const { estado, ...body } = req.body;
    const proformaModificada =
        await Proforma.findByIdAndUpdate(id, body, { new: true });
    res.json(proformaModificada);
}
const borrarProforma = async (req, res = response) => {
    const { id } = req.params;
    const proformaEliminada =
        await Proforma.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(proformaEliminada)

}

module.exports = {
    obternerProformas,
    obtenerProforma,
    crearProforma,
    actualizarProforma,
    borrarProforma
}