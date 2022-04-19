//Vamos fazer uma nave acelerar até 100km/h com aceleração de 5km/h usando a estrutura de repetição while
let velocity = 0
let acceleration = 5


while(velocity <= 100) {
    console.log(`Estamos com a velocidade de ${velocity}km/h. Acelerando a nave`)
    velocity += acceleration // velocity = velocity + acceleration
}