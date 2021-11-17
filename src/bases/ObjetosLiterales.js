const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123,
        lat: 12.4,
        lon: 34.98
    }
}

const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)