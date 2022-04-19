// ecopo local: Quando uma variavel e declarado dentro de uma função ou estrutura é ela so pode ser acessada dentro da função ou estrutura

function local() {
    let velocity = 10
}

local()
console.log(velocity)

// essa estrutura vai dar erro pois ela não e um scope global