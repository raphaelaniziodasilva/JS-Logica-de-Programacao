/* O .filter vai filtrar os elementos do array 
ex: Vamos filtrar as armaduras que tem mais de 7 caracters
*/
let armorList = ["Pandora", "Alexiu", "Fenix", "Aquilis", "Spartacus"]
//vamos fazer o filtro de cada elemento usando arrow function
let with7Chars = armorList.filter(element => {return element.length >= 7})
// imprimir os lementos que conteham mais de 7 caracters
console.log(with7Chars)