//Requerides
const fs = require('fs');
const colors = require('colors');

let listarResultado = (base, limite = 10) => {

    console.log('==============================='.red);
    console.log(`======== TABLA DEL ${base} ==========`.red);
    console.log('==============================='.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(base + ' x ' + i + ' = ' + base * i);
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-del-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarResultado
}