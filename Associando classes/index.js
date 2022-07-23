/*  objeto pode ter numa de suas propriedades um outro objeto que também pode ter outro objeto e assim por diante...
Podemos ter então um objeto que receba uma instância de outro objeto
ex: */
class Captain {
    constructor(name, age, fligthHours) {
        this.name = name
        this.age = age
        this.fligthHours = fligthHours
    }
}
/* Vamos criar uma classe para a nave para interagir a class captain */
class Spaceship {
    /* vamos colocar nesse contrutor os dados do capitão que é para instanciar com a class captain  */
    constructor(name, crewQuantity, captainName, captainAge, captainFligthHours) {
        this.name = name
        this.crewQuantity = crewQuantity
        /* vamos criar uma propriedade captão que vai ser instanciada com a classe captain aonde vamos passar os mesmos parâmetros do capitão que esta na construção da spaceship */
        this.captain = new Captain(captainName, captainAge, captainFligthHours)
    }
}
/* Vamos intanciar numa spaceship para receber a instanciação de uma nave aonde vamos passar os valores da nave e do capitão */
let spaceship = new Spaceship("Fenix", 22, "Will Smith", 33, 3500) 

console.log(spaceship)