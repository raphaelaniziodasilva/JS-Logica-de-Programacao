class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false // --> vai informar se a nave esta engatada
        this.entraceDoorsOpen = false // --> vai informar se as portas da nave estão abetras
    }
    /* quando a nave for engatada na estação vai alterar para verdadeiroo o isHitched e entraceDoorsOpen */
    hitch() {
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}
/* função para exibir o menu e vai validar o que o usuário digitou vai estar dentro das opções  */
function showMenu() {
    let chosenOption
    /* vai exibir o menu ate que uma das opções 1, 2 ou 3 seja digitada */
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "O que deseja fazer?\n" +
                                "1- Engatar nave\n" +
                                "2- Imprimir naves\n" +
                                "3- Sair do programa")
    }
    return chosenOption // --> vai retornar opção que o usuário digitou que seja 1, 2 ou 3
}
 
let hitchedSpaceships = [] // --> vai receber a lista de naves 

/* vai adicionar nome e a quantidade de tripulantes da nave*/
function createSpaceship() {  
    let spaceshipName = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")

    /* vai receber a instanciação de spaceship */
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship // --. va retorna o objeto
}

/* função para imprimir */
function printSpaceshipList(spaceships) { 
    let spaceshipList = "" // --> vai armaznar a lista de naves em formato de string
    /*vai percorrer por cada elemento da lista e vai criar uma string para exibir no alert a lista de nave */
    spaceships.forEach((spaceship, index) => { 
        spaceshipList +=    (index + 1) + "- " + spaceship.name +
                            " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
}

let chosenOption

while(chosenOption != "3") { // --> enquanto a opção de sair 3 nao for escolhida vai ficar retornarndo o menu
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch() // --> está chamando o método hitch tornando eles verdadeiro 
            hitchedSpaceships.push(spaceshipToAdd) // --> vai adicionar o objeto na lista
            break
        case "2":
            printSpaceshipList(hitchedSpaceships) // --> vai imprimir a lista de nave
            break
    }
}