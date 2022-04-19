//invertendo nome e quando o nome tiver a letra "e" vai parar de imprimir

let nome = prompt("Digite um nome")
let invertido = "" //essa variavel vai receber o nome invertido
//para inverter o nome
for(let i = nome.length - 1; i >= 0 ; i--) {

   if(nome[i] == "e") { //parar de executar quando chegar na letra "e"
    break
   } else { //para inverter o nome
    invertido += nome[i]
   }
}
alert(`Nome normal: ${nome} \nNome invertido: ${invertido}`)

