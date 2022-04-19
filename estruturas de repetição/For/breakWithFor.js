//Quando chegar na letra "o" vai parar de imprimir
let nome = "Raphael"
for(let pos = 0; pos <= nome.length; pos ++) {
    if(nome[pos] == "e") {
    break // para parar de imprimir quando chegar na letra e
}
console.log(nome[pos])
}