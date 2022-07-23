/* Instância de uma classe é o que da origem ao objeto:
Quando dizemos que uma classe foi instânciada estamos dizendo apenas que um objeto foi cirado a patir daquela classe
A classe vêm com um método especial que chamamos de construtor:
Utilizamos para definir valores iniciais dos atributos de um objeto.
Este método é chamado quando criamos uma instância ce uma classe com palavra 
ex:*/

class SpacialStation {
    // vamos criar construtor com dois parâmetros
    constructor(name, quantity) {
        this.nome = name // --> atributo nome vai receber o parâmetro name
        this.quantity = quantity // --> atributo quantity vai receber o parâmetro quantity
    }
}
/* Para poder instânciar essa classe temos que criar uma variável que vai ser um objeto e chamar o método construtor e dar valores aos parâmetros*/
let fenix = new SpacialStation("Andrômeda", 29)

//imprimir fenix
console.log(fenix) 