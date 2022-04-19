//Vamos trocar a letra "e" pela letra "i" ultilizando for

let spaceship = "Helmet"
let NewSpaceship = ""

for(let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == "e") {
        NewSpaceship += "i"
    } else {
        NewSpaceship += spaceship[i]
    }
}
console.log(NewSpaceship)
