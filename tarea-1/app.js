const crearArchivo = require('./crearArchivo')
const path = require('path')

let text = ''

for (let i = 1; i <= 10; i++) {
    text += `5 x ${i} = ${5*i}\n`
}

const fileName = 'tabla-5.txt'
const direccion = path.join(__dirname, fileName)
crearArchivo(direccion, text)