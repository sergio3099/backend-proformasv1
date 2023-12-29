const nodemailer = require('nodemailer');

// Configuración del transporter para enviar el correo electrónico
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arnolite128@gmail.com', // Tu correo electrónico desde el cual se enviará el mensaje
    pass: 'yaih oixu ztuw fbwc' // Tu contraseña del correo electrónico
  }
});

// Función para enviar un correo electrónico
const enviarCorreo = async (destinatario, datosProforma) => {
  const mailOptions = {
    from: 'arnolite128@gmail.com',
    to: destinatario,
    subject: `Hola ${datosProforma.nickname}`,
    html: `<p>Estos son los datos de tu proforma:</p>
      <p>Dirección:          ${datosProforma.direccion}</p>
      <p>Referencia:         ${datosProforma.referencia}</p>
      <p>Celular:            ${datosProforma.celular}</p>
      <p>Producto:           ${datosProforma.producto}</p>
      <p>Medidas:            ${datosProforma.alto} x  ${datosProforma.ancho}</p>
      <p>Grosor del vidrio:  ${datosProforma.grosorVidrio}</p>
      
      <p>Si quieres ver mas detalles de la proforma visita tu perfil</p> // Añade aquí los datos que quieras enviar por correo
      <p>Contáctanos para cotizaciones personalizadas</p>` // Añade aquí los datos que quieras enviar por correo
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado correctamente');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

module.exports = {
  enviarCorreo
};