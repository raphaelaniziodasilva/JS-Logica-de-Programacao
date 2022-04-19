//função desacelerar
function slowDown(velocity, print){
    let desaceleration = 20
    // estrutura de repetição para desacelerar a nave até 0
    while(velocity > 0){
        print(velocity)// vai imprimir a nova velocidade
        velocity -= desaceleration // velocity = velocity - desaceleration
    }
}

// velocidade atual da nave 
let spaceshipVelocity = 150
//chamar a função desacelerar colocar a velocidade da nave e criar uma função anônima para imprimir a valocidade
slowDown(spaceshipVelocity, function(velocity){
    console.log(`Velocidade atual ${velocity}km/s`)
})
console.log("Nave parada as comprta podem ser abertas")