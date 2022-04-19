/* O .map serve prara modificar os elementos do array um a um sem alterar o array original
ele vai percorrer cada elemento vai alterar esse elemento pelo retorno que vamos colocar no nosso callback depois vai pegar esse novo array que foi geradoe retornar*
ex: Vamos pegar todas as armaduras dos deuses que esta dentro do array e deixar com as letras maiusculas */
let armorList = ["Fenix", "Pandora", "Aquilis", "Teseu"]
// Usando o .map para modificar os elementos que esta no array e usando também uma função de alta classe

let armor = armorList.map(function(nameArmor) {
    // transformar todas as letras em maiúsculas usando o toUpperCase
    let maiuscula = nameArmor.toUpperCase()
    return maiuscula
})
// imprimir o resultado para ver se os nomes estão todos em maiusculos
console.log(armor)

/* Parâmetros usado
nameArmor = Nome da armadura
*/