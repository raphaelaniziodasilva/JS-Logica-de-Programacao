/* O .find vi retorna o primeiro elemento que satisfazer a condição logica 
ex: Vamos retorna a primeira armaduras que tem mais de 7 caracters */

let armorList = ["Pandora", "Alexiu", "Fenix", "Aquilis", "Spartacus"]
//vamos usar o find para retorna o primeiro elemento usando arrow function
let with7Chars = armorList.find(element => {return element.length >= 7})
// imprimir o primeiro elemento que achou com mais de 7 caracters
console.log(with7Chars)