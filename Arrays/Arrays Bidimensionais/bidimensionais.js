/* Array Bidimensional e um array que armazena outros arrays dentro dele
ex: fazer uma lista de naves só que nesta lista deve ser armazenado o nome da nave e a quantidade de passageiros
*/

let voo = [ ["Fenix", 12], ["Star Wars", 5],["Avangers", 2], ["King", 22] ]
//vamos acessar uma nave e a quantidade de pessoas 
console.log(voo[2])

//dicionar mais uma nave e a quantidade de pessoas
voo.push(["Lord", 33])
//imprimir a lista de voo atualizada
console.log(voo)

/* Podemos também acessar um elemento ou mais que esta dentro desses arays abasta você chamar a array desjado e a poição dodo elemento
ex:*/
//           array:2  elemento:0
console.log(voo[2]        [0])

