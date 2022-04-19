/* O Splice serve para trocar elementos por outros elementos que estão no meio do array: 
ele deleta os elementos desejados e depois subustitui por novos elementos é ele também consegue retornar os elementos removidos
ex: Vamos criar uma lista, vamos remover elementos, e acrescentar elementos no lugar
*/
let spaceshipNames = ["Elemental", "Golias", "Artemis"]
//imprimie a lista 
console.log(spaceshipNames)
/* Vamos remover o primeiro e o segundo elemento e acrescentar 3 elemento no lugar */
let removedSpaceships = spaceshipNames.splice(1, 2, "Fenix", "Star Wars", "Anubis" )
//imprimindo a lista de nave atualizada
console.log(spaceshipNames)
// Imprimir os elementos removidos
console.log(removedSpaceships)

/*Podemos somente excluir os elementos! sem precisar adicionar outros no lugar */

let listSpaceships = ["Alexius", "Gladiador", "Zeus", "Sparta", "Atena"]
console.log(listSpaceships)
//excluir somente os elementos! 
removedList = listSpaceships.splice(1, 2 && 3)
//imprimir lista atualizada
console.log(listSpaceships)