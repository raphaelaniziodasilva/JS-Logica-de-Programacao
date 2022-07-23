/* Os métodos são funções que agente acrescenta dentro dos objetos e quando agente esta lidando com calsse elas podem ser declaradas juntas para que o objeto que foi instanciado as recebas.
ex: */
class spaceship {
    constructor(name) { // --> método construtor
        this.name = name // --> o nome do objeto que vai receber o parâmetro
        /*vamos criar um novo parâmetro aonde toda nave que for criada vai começar com a velocidade 0 */
        this.velocity = 0
    }
    /* vamos criar um método (função) para acelerar a nave */
    speedUp(acceleration) {
        this.velocity += acceleration
    }
}
/* vamos instanciar a nossa classe spaceship */
let artemis = new spaceship("Artemis")
console.log(artemis)

/* Agora vou chamar o método para acelerar a nave */
artemis.speedUp(10)
artemis.speedUp(15)

console.log(artemis)
