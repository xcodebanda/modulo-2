const path = require('path')
const fs = require('fs');

let text = ''

for (let i = 1; i <= 10; i++) {
    text += `5 x ${i} = ${5*i}\n`
}

const fileName = 'tabla-5.txt'
fs.writeFile(path.join(__dirname, fileName), text, (error) => {
    if (error) {
        console.log('Hubo un problema!')
        return
    }
    console.log('Tarea completada!')
})