const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]
/* utilizar o filtro para poder filtrar as naves que possuem mais de 9 passageros, é utlizar um arrow function como callback aonde vai percorrer por cada elemento do array
usando o map para receber só os nomes da naves */
let passageiros9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {  
    return spaceship[0]
})

// encontrar a primeira nave que esta com a plataforma de engate pendente usando o findIndex, é utlizar um arrow function como callback aonde vai percorrer por cada elemento do array
let engate = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

// Colocar toda a lista em caixa alta(letras Maiúsculas) é utlizar um arrow function como callback aonde vai percorrer por cada elemento do array
let caixaAlta = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

//vamos colocar a menssagem em uma variável
let message = `Espaçonave com mais de 9 tripulantes: ${passageiros9.join(", ")}`
message += `\n Plataforma com processo de engate: ${engate}`
message += `\n Espaçonaes destacadas ${caixaAlta.join(", ")}`

alert(message)