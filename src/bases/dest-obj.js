const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man'
}

const {nombre, edad, clave} = persona;

console.log(nombre)
console.log(edad)
console.log(clave)

const retornaPersona = (usuario) => {
    console.log(usuario)
}

retornaPersona(persona)