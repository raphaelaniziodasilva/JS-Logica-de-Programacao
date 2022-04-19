// Vamos criar uma função que vai dobrar a velocidde, porem vai receber uma outra função que essa nova velocidade vai ser impressa  ou seja vamos jogar uma função dentro de um parâmetro

// vamos criar uma função normal para dobrar a velocidade e imptimir
function doubleVelocity(velocity, print) {
    console.log("Entrei em doubleVelocity")
    let newVelocity = velocity * 3
    //vou chamar o parâmetro print como uma função e com um parâmetro newVelocity
    print(newVelocity)
    // agora vou retorna o valor da newVelocity
    return newVelocity
}
// agora vamos criar uma função anônima ou uma arrow function que vai imprimir uma velocidade
let printVelocity = velocity => {
    console.log(`Nova velocidade ${velocity}km/s`)
}
// vamos chamar a função doubleVelocity pasando a função printVelocity como parâmetro
let NewVelocity = doubleVelocity(60, printVelocity)
console.log(NewVelocity)
