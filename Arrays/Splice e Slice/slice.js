/*  O .slice vai extrair os elementos que esta dentro do array sem alterar o array original: retornando os lementos extraidos
  ex: você vai extrair os elementos de 1 ao 4 sem incluir o elemento 4  que não pode ser xtraido ou seja ele vai extrair os elementos 1, 2 e 3 só */

  let Names = ["Hungria", "Matue", "João gomes", "Nog", "Kevin", "Ryan", "Hariel"]
  //extrair os elementos de 1 ao 4 sendo que o elemento 4 não pode ser extraido
  let extractNames = Names.slice(1, 4)
  //imprimir o array original
  console.log(Names)
  //imprimir os elementos extraidos
  console.log(extractNames)
// note que foram extraidos os elementos que esta na posição 1, 2 e 3