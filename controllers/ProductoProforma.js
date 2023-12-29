const { response } = require('express')
const { ProductoProforma } = require('../model')



const obtenerProductoProformas = async (req, res = response) => {
    const { limite = 100, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, productosProformas] = await Promise.all(
        [
            ProductoProforma.countDocuments(query),
            ProductoProforma.find(query)
                .skip(desde)
                .limit(limite)
        ]
    )
    res.json({
        total,
        productosProformas
    })

}
const obtenerProductoProforma = async (req, res = response) => {
    const { id } = req.params
    const productoProforma = await ProductoProforma.findById(id);
    res.json(productoProforma);
}

const crearProductoProforma = async (req, res) => {
    const { estado,...body } = req.body;
    try {

        const precio = (body.alto/4) +( body.ancho/4) + 100;
        body.precio = precio
        const productoProforma = new ProductoProforma(body);
        const productoProformaNueva = await productoProforma.save();

        return res.status(201).json(productoProformaNueva);

    } catch (error) {
        console.log(error);
    }
}

const actualizarProductoProforma = async (req, res = response) => {
    const { id } = req.params;
    const { estado, ...body } = req.body;
    const productoProformaModificada =
        await ProductoProforma.findByIdAndUpdate(id, body, { new: true });
    res.json(productoProformaModificada);
}
const borrarProductoProforma = async (req, res = response) => {
    const { id } = req.params;
    const proformaEliminada =
        await Proforma.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(proformaEliminada)

}

module.exports = {
    obtenerProductoProforma,
    obtenerProductoProformas,
    crearProductoProforma,
    actualizarProductoProforma,
    borrarProductoProforma
}