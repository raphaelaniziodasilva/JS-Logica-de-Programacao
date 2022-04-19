/*
Aatribuição sempre vai o correr na mesma ordem da declaração!
vamos fazer a soma da velocidade
*/



function pilot(velocidade, aceleração, unidade = "km/h"){
    NovaVelocidade = velocidade + aceleração
    console.log(`Nova velocidade ${NovaVelocidade}${unidade}`)
}

pilot(30, 20,)