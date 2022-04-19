//Sistema de dobras


let nave = prompt("Qual é o nome da Nave?")
let option = prompt("Deseja entrar em dobra espacial? \n 1: Sim \n 2: Não")
let dobra = 0

while(option == 1) {
    dobra += 1
    option = prompt("Deseja entrar em dobra espacial? \n 1: Sim \n 2: Não")
}

alert(`Nome da Nave: ${nave} \nDobras espaciais realizadas ${dobra}`)