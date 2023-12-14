const express = require('express');
const cors = require('cors');
const {dbConnection}= require('./database/config')


class Server 
{
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.paths = {
            clientes: '/api/clientes',
            productos: '/api/productos',
            tipoVidrios: '/api/tipovidrios',
            tipoAluminios: '/api/tipoaluminios',
            medidas: '/api/medidas',
            proformas: '/api/proformas',
        }
        this.conectarDB();
        this.middlewares();
        this.routes();
        // localhost:4000/v1/softwareproformas/api/clientes
        this.router.use('/v1/softwareproformas', this.app)
        this._express = express().use(this.router)
        
    }
    async conectarDB(){
        await dbConnection()
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.clientes, require('./routes/cliente'))
        this.app.use(this.paths.productos, require('./routes/producto'))
        this.app.use(this.paths.tipoVidrios, require('./routes/tipoVidrio'))
        this.app.use(this.paths.tipoAluminios, require('./routes/tipoAluminio'))
        this.app.use(this.paths.medidas, require('./routes/medida'))
        this.app.use(this.paths.proformas, require('./routes/proforma'))
    }
    listen(){
        this._express.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;