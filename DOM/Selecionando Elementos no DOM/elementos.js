function show() {
    /* Vamos selecionar o elemento pelo ID */
    let element = document.getElementById("txtnome")
    console.log(element.value)

    /* Vamos selecionar o elemento pelo nome --> name */
    let telefone = document.getElementsByName("txtphone")
    console.log(telefone[0].value)

    telefone = document.getElementsByName("txtphone")
    console.log(telefone[1].value)

    /* Quando selecionamos pelo name vai chamar todos os elementos que estiver no input com o mesmo name = nome escolhido. Para acessá-los e atribuir um valor temos que identificar a posição em que o elemento está*/

}

  /* Vamos selecionar o elemento pelo querySelectorAll */
  /* 
  let phone = document.querySelectorAll("div#phone input[name=txtphone]")
  console.log(phone[1].value)
  */

  /* Quando selecionamos pelo querySelectorAll temos que chamar a div e dentro dessa div temos que chamar o input desejado. Para acessá-los e atribuir um valor temos que identificar a posição em que o elemento está dentro da div*/

 /* Vamos selecionar o elemento pelo tagName */
 /*let phone = document.getElementsByTagName("input")
 console.log(phone)*/
 
 /* Quando selecionamos pela tagneme = ou seja nome da tag ele vai selecionar todos os elementos que estiver dentro do input e vai retorna todos os eleentos do tipo input */



