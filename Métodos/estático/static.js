/* Diferente dos métodos tradicionais que são chamados no objeto os estáticos são chamados direto na classe. Eles são bem uteis quando queremos ter algo que não vai ser alterar independentemente da instância do objeto */
class Station {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }
    /* Vamos criar um método estático para poder calcular qual é a carga de processamento em horas */
    static calculateProcessHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours
    }
}
 /* Vamos atribuir o resultado sem precisar fazer a instancia vamos somente chamar o método estático */
 let station = new Station("Caneta", 3)
 console.log(station
    )
 let Process = Station.calculateProcessHours(420, 20)
 console.log(Process)