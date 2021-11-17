const nombre = 'Enoc';
const apellido = 'Pineda';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Es es un texto: ${ getSaludo('Aguirre')}`)