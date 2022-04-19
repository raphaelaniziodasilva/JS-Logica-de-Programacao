/* O .forEach simplesmente percorre por cada elemento que esta dentro do array e ele vai chamar um callback que agente vai declarar 
Ex:*/
let hitchedSpaceships = ["Demeter", "Darwin", "Supernova", "Fenix", "Puller"]
//usando o forEach para percorrer por cada elemento que esta no array e usando também uma função de alta classe
hitchedSpaceships.forEach(function(currentSpaceship, index) {
    console.log(`Nave: ${currentSpaceship} \n Posição: ${index}`)
})

/* Parâmetros usado
currentSpaceship = Nome da nave
index = Posição de cada nave
*/