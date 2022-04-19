//perguntar a distância e guardar em uma variavel
let dist = prompt("Digite a distância em Anos-Luz")
//escolha uma opção e guarda em uma variavel
let option = prompt("Para qual unidade deseja converter? \n 1 Parce (PC) \n 2 Unidade astronômica (AU) \n 3 Quilômetros (KM) \n \n Digite a opção desejada!")

//criar uma variavel para o valor escolhido e para converter a distância
let choseValue = ""
let convert = ""

//vamos utilizar o Switch para realizar a opção escolhida pelo usuario

switch(option) {
    case "1":
        choseValue = "Paerce PC"
        convert = dist * 0.306601
        break
    case "2":
        choseValue = "Unidade Astronômica"
        convert = dist * 63241.1
        break
    case "3":
        choseValue = "Quilômetros"
        convert = dist * 9.5 * Math.pow(10, 12)
        break
    default:
        choseValue = "unidade não encontrado"
        convert = "Conversão fora de escopo"
        break
    }

    alert(`Distância em Anos-Luz: ${dist} \n ${choseValue}: ${convert}`)