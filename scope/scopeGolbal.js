// Escopo global: Quando a variavel é declarada fora de uma função ou de qual quer estrutura e ela pode ser aessada de qualquer lugar

// Vamos alterar o valor de uma variavel global

let spaceshipName = "Nildiberg"

//alterando o valor dentro de uma função

function alterar() {
    spaceshipName = "Nildin"
}

// chamar o valor da primeira variavel
console.log(spaceshipName)

//chamando a função e o novo valor atribuido na variavel global
alterar()
console.log(spaceshipName)
