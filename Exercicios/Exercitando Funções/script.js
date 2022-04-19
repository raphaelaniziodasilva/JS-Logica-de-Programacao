//usuario digitar nome da nave
let nave = prompt("Qual é o nome da nave?")
//Velocidade inicial da nave
let velocidade = 0
//vai armazenar uma das opções que o usuario digitar
let option 

//Vamos criar o menu dentro de uma função
function menu() {
    let opção 
    while(opção != "1" && opção != "2" && opção != "3" && opção != "4" ) {
        opção = prompt(" O que deseja fazer? \n 1: Acelerar a espaçonave em 5km/s \n 2: Desacelerar a esoaçonave em 5km/s \n 3: Imprimir dados de bordo \n 4: Sair do programa ")
    }
    return opção
}
// fazer as funções : acelerar a nave em 5km/s
function acelerar(velocidade) {
    let NovaVelocidade = velocidade + 5
    return NovaVelocidade
}
// desacelerar a nave
function desacelerar(velocidade) {
    NovaVelocidade = velocidade - 5
    //a velocidade não pode ser menos que zero
    if(NovaVelocidade < 0) {
        NovaVelocidade = 0
    }
    return NovaVelocidade
}
//imprimir dados de bordo
function imprimir (nome, velocidade){
    alert(`Espaçonave: ${nome} \n Velocidade: ${velocidade}`)
}

// usando do while com o teste logico no final
do {
    //chamar o menu com option
option = menu()
//vamos usar o switch para escolher as opções
switch(option) {
    case "1":
        velocidade = acelerar(velocidade)//a cade vez que acelerar vai chamar a função com o valor atua
        break
    case "2":
        velocidade = desacelerar(velocidade) //a cade vez que desacelerar vai chamar a função com o valor atua
        break
    case "3":
        imprimir(nave, velocidade)
        break
    default:
        alert("Encerrando o programa")
}
} while(option != 4)
