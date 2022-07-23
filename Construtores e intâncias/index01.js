/* Construtor com parâmetro que já tem um valor padrão */
class spaceship {
     // vamos criar construtor com dois parâmetros
    constructor(name, type = "Descoberta") {
        this.name = name //--> atributo name vai receber o parâmetro name
        this.type = type // --> atributo type vai receber o parâmetro type
    }
}
/* Para poder instânciar essa classe temos que criar uma variável que vai ser um objeto e chamar o método construtor e dar valores aos parâmetros*/
let enbaixador = new spaceship("Gustavo Lima")
// imprimir objeto enbaixador
console.log(enbaixador)

let eraser = new spaceship("Xbox", "series x")
//imprimir eraser
console.log(eraser)
