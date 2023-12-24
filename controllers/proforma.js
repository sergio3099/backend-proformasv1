const { response } = require('express')
const { Proforma } = require('../model')
const {enviarCorreo} = require('./emailSender')


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
    const proforma = await Proforma.find(id);
    res.json(proforma);
}

const crearProforma = async (req, res) => {
    const { estado, ...body } = req.body;
    try {
        const proforma = new Proforma(body);
        const proformaNueva = await proforma.save();

        await enviarCorreo(proformaNueva.email, proformaNueva)
        return res.status(201).json(proformaNueva);

    } catch (error) {
        console.log(error);
    }
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