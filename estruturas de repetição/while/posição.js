//Imprimir as posição que tenha a letra "A" e "a"
let constelação = "Andromeda"
let pos = 0
let constelaçãoLength = constelação.length

while(pos < constelaçãoLength) {
    if(constelação[pos] == "A" || constelação[pos] == "a") {
        console.log(pos)
    }
    pos += 1
}