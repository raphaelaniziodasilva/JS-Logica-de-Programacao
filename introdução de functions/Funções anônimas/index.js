// Funções anônimas são funções que estão escondidas dentro de uma variável porém elas não possuem nome  
let doubleSpeed = function(velocity) {
    return velocity * 2   
}

//chamar a função criando uma nova variavel
let NewVelocity = doubleSpeed(6)
console.log(NewVelocity)
