//Retorno da função
function speedUp(velocity, acceleration) {
    let NewVelocity = velocity + acceleration
    console.log(`Nova velocidade: ${NewVelocity}`)
    return NewVelocity
}

//Utilizando o retorno da função jeito 1
console.log(speedUp(10, 5))

//Utilizando o retorno da função jeito 2
speedUp(100, 40)
