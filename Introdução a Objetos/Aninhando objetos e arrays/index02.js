/* Objeto dentro de outro objeto */
let spaceship = {
    name: "Golias",
    maxCrew: 25,
    captain: {
        name: "Matue do trap",
        idade: 23
    }
}
// imprimir o nome do captão
console.log(spaceship.captain.name)
// imprimir a idade do captão
console.log(spaceship.captain.idade)
