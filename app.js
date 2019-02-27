const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarResultado } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarResultado(argv.base, argv.limite);
        //.then(respuesta => console.log(respuesta))
        //.catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archvo Creado: ',
                `${archivo}`.bgRed.black))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando No Reconocido');
}

//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Límite: ', argv.limite);
//console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];