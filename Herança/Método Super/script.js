/* Podemos ter casos aonde agente só quer apenas incrementar uma implementação que ja esta feita em yma classe. E aqui que vai entrar o super() 
ex: */
class Spaceship {
    constructor(name, maxCrew, maxRecomendedValue) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecomendedValue = maxRecomendedValue
        this.currentVelocity = 0 // --> Velocidade inicial = 0
    }
    /* método de aceleração */
    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecomendedValue) {
            alert("Velocidade máxima ultrapassada! \n Diminua a velocidade ou irar ocasionar danos a nave")
        }
    }
}
/* Vamos criar uma outra classe que essa class vai herdar tudo de spacesip.
Além de herdar vamos sobrescrever o método construtor eo  método de aceleração speeUp além de sobrescrever vamos aproveitar essas implementações que ja foram feitas*/
class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecomendedValue, maxLoadWeight) {
        /* Vamos usar o super() que vai chamar o construtor da classe que esta sendo herdada ou seja spaceship e temos também que passar os parametro do contruto da spaceship */
        super(name, maxCrew, maxRecomendedValue)
        this.maxLoadWeight = maxLoadWeight //--> criando a propriedade(atributo) para rceber o valor maxLoadWeight
    }
    /* Agora vamos reiplementar o método da aceleração que vai acelerar somente a metade do valor */
    speedUp(acceleration) {
        acceleration /= 2
        alert(`Incrementando a velocidade em ${acceleration}km/s`)
        /* Vamos aproveitar o método da aceleração da class spaceship*/
        super.speedUp(acceleration)
    }
}
/* Vamos fazer o instanciament */
let transportation = new TransportSpaceship("Caneta", 4, 50, 600)
/* imprimindo resultado*/
console.log(transportation)
/* vamos acelerar a nave de transporte*/
transportation.speedUp(100)