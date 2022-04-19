/* A função .indexOf serve para procurar a posição em que esta um determinado elemento e depois retorna em qual osiçao esse elemento se encomtra.

Em qual posição se encontra o item "Controle" que esta dentro da lista?
*/

let lista = ["Xbox", "Controle", "Jogo", "Celular"]

//procurando a posição em que se encontra o item "controle" que esta dentro da lista
let elementoPos = lista.indexOf("Controle")

//imprimindo a posição em que encontra o item controle
console.log(elementoPos)

//Caso o item não for encontrado ele retorna -1 quer dizer que não existe nenhum item com aquele nome
let itemPos = lista.indexOf("Notebook")
console.log(itemPos)

