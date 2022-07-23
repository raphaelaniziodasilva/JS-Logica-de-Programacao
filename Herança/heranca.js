/* Herança permite que uma classe herde tudo de uma outra classe o construtor e métodos e etc...
ex: */
class Spaceship {
    constructor(name, maxCrew, maxRecomendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecomendedVelocity = maxRecomendedVelocity
        this.currentVelocity = 0 // --> velocidade inical da nave
    }
    // método de aceleraçõ
    speedUP(acceleration) {
        this.currentVelocity +=acceleration
     /* Se a minha velocidade for mior que a minha velocidade maxima recomendada aparecera a menssagem */
     if(this.currentVelocity > this.maxRecomendedVelocity) {
         alert("VELOCIDADE MÁXIMA ULTRAPASSADA! \n  Diminua ou poderá provocar danos a nave." )
     }
    }
}

/* Vamos criar uma outra classe aonde ela vai herdar tudo da classe Spaceship: construtor e o metodo de aceleração */
class BattleSpaceship extends Spaceship { // --> extends: palavra chave para uma class herdar de outra classe
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando a nave de batalha!")
    }
}

/* Vamos criar uma outra classe aonde ela vai herdar tudo da classe Spaceship: construtor e o metodo de aceleração */
class DiscoverySpaceship extends Spaceship { // --> extends: palavra chave para uma class herdar de outra classe
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo os equipamentos de amostra e parando a nave de descoberta")
    }

}
//intanciar as classe 
let fenix = new BattleSpaceship("Fenix", 11, 180)
let real = new DiscoverySpaceship("Real", 155, 200)
// imprimindo
console.log(fenix)
console.log(real)
// acelerar a nave chamando o método speedUP
fenix.speedUP(180)
real.speedUP(260)
// parar a nave chmand o método stop
fenix.stop()
real.stop()