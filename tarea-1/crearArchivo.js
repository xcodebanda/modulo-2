const fs = require('fs');

const crearArchivo = (direccion, contenido) => {
    fs.writeFile(direccion, contenido, (error) => {
        if (error) {
            console.log('Hubo un problema!')
            return
        }
        console.log('Tarea completada!')
    })
}

module.exports = crearArchivo