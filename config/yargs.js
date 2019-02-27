const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola las tablas de multiplicar', opts)
    .command('crear', 'Crear un archivo con las tablas de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}