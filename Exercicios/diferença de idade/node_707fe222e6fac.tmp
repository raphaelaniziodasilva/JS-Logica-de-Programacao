//Diferença de nome entre duas pessoas
/*
let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let nom = prompt("Qual é o seu nome?")
let ida = prompt("Qual é a sua idade?")
let diferença = idade - ida
alert(`Meu nome é ${nome} tenho ${idade} anos \n Meu nome é ${nom} tenho ${ida} anos \n A diferença de idade entre ${nome} e ${nom} é de ${diferença} anos`)
*/

function calcular() {
    //fazer ligação com html
    let txtnome = document.getElementById("txtnome")
    let txtidade = document.getElementById("txtidade")
    let txtnome1 = document.getElementById("txtnome1")
    let txtidade1 = document.getElementById("txtidade1")
    let res = document.getElementById("res")
    // criar variavel do tipo string
    let nome = (txtnome.value)
    let nome1 = (txtnome1.value)
    //criar variavel do tipo numerica
    let idade = Number(txtidade.value)
    let idade1 = Number(txtidade1.value)
    // calcular a diferença de idade
    let dif = idade - idade1

    res.innerHTML = `<p>Nome: ${nome} tenho ${idade} anos</p>`
    res.innerHTML += `<p>Nome: ${nome1} tenho ${idade1} anos</p>`
    res.innerHTML += `A diferença entre ${nome} e ${nome1} é de ${dif} anos`

}