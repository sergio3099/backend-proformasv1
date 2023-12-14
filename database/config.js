const mongoose = require ('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log(`Base de datos ejecutandose sin problemas`);
    } catch (error) {
        console.log(error);
        throw new Error(`Base de datos no disponible`)
    }
}

module.exports = {
    dbConnection
}