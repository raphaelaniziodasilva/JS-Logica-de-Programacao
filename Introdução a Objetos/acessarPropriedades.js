/* Temos dois jeitos de acessar uma propriedade que esta dentro de um objeto */
let voo = {
    nave: "Coruja",
    passageiros: 88,
    tipo: "Comercial",
    id: "12A52",
    rastreador: "Coruja01" 
}

/* O primeiro jeito de acessar ou (Chamar) uma propriedade do meu objeto
nome do objeto.propriedade = valor
*/
console.log(voo.rastreador)

/* O segundo jeito de acessar ou (Chamar) uma propriedade do meu objeto
nome do objeto[propriedade] = valor
*/

console.log(voo["passageiros"])




