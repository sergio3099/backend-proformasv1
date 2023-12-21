const { response } = require('express')
const { Proforma } = require('../model')
const nodemailer = require('nodemailer')

//Configuracion ppara envios de correos
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Aquí utiliza el servicio de correo que necesites
    auth: {
        user: 'arnolite128@gmail.com', // Cambia esto por tu dirección de correo electrónico
        pass: 'yaih oixu ztuw fbwc' // Cambia esto por tu contraseña
    }
});



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

    // Enviar correo electrónico con los datos del nuevo cliente
    const mailOptions = {
        from: 'arnolite128@gmail.com',
        to: req.user.email, // Cambia esto por la dirección de correo del destinatario
        subject: 'Proforma enviada, estos son los datos',
        text: `Se ha enviadao una proforma con los siguientes datos
        \nNombre: ${body.nombre}\nOtras propiedades: ...` // Agrega aquí el resto de las propiedades del cliente
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar correo', error);
        } else{
            console.log('correo enviado', info.response);
        }
    })
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