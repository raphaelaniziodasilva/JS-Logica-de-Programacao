/* ex:  Uma lista de naves com os seus respectivos nomes e quantidad de tripulação */
let spaceships = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colosus", crewQuantity: 8},
    {name: "Helmet", crewQuantity: 15}
]
// imprimir o nome da primeira nave
console.log(spaceships[0].name)

//imprimir a quantidade de tripulantes que tem na segunda nave
console.log(spaceships[1].crewQuantity)

/* podemos percorrer pelo array e objeto é falar qual é o nome da nave é a quantidade de tripulantes de cada um*/
spaceships.forEach(spaceship => {
    console.log(`${spaceship.name}, tem ${spaceship.crewQuantity} tripulantes`)
})