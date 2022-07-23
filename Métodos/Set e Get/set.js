/* O método Set é utilizado para poder atribuir um valor numa variável. E quando ele é criado agente pode chamar esse método do mesmo jeito que uma varia´vel ao receber o valor*/
class transport {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0 //--> velocidade inicial
    }
    /* A nave não poderá ultrapassar a velocidade de 120km/s vamos usar o método set*/
   set Velocity(newVelocity) {
    if(newVelocity > 120) {
        this.currentVelocity = 120
    } else {
        this.currentVelocity = newVelocity
    }
 }
}
/* Vamos instanciar*/
let spaceship = new transport("Transporte")
/* Vamos atribuir a velocidade chamando o método set que pode ser chamado como se fosse uma variável*/
spaceship.Velocity = 150
/* Imprimindo*/
console.log(spaceship)
/* atribuindo novo valor */
spaceship.Velocity = 80
console.log(spaceship)
