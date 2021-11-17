const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, Vegeta] = personajes;

console.log(Vegeta)

const retornarArreglo = () => {
    return ['ABC', 123] 
}

const [letras] = retornarArreglo();
console.log(letras)

const [, numeros] = retornarArreglo();
console.log(numeros)