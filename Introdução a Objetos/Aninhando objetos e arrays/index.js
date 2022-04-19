/* Vamos fazer um aninhamento entre entre objetos e arrays */
let spaceship = { // --> objeto
    nome: "Supernova",
    type: "Batalha",
    crew: ["Aquiles", "Ana julia", "Thiago"]
}
//Agora vamos adicionar mais um tripulante
spaceship.crew.push("Tenente Perseu")
//imprimir o objeto completo
console.log(spaceship)
//imprimir o nome do tenente perseu que foi adicionado
console.log(spaceship.crew[3])


