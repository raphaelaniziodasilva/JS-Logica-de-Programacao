function showInfo() {
    // chamando o id name para atribuir o valor
    let name = document.querySelector("#name").value 
    // selecionando a cor propriedade'
    let color = document.querySelector("#color option:checked").value
    // selecionando a oção do radio pelo name
    let radio = document.querySelector("#radio:checked").value
    //pegando todos os chekbox marcados em forma de array utilizando o queryselectorAll para pegar todos os checkbox
    let developer = document.querySelectorAll("#developer:checked")

    let devOption = [] // vai rceber os valores marcados
    // usando o forEach para percorrer no array developer
    developer.forEach(element => {
        devOption.push(element.value) // recebendo o valor que esta sendo percorrido pelo forEach de cada elemento checado
    })
    // para receber as ações que foram checadas em texto juntando todo array numa unica string
    let devChecked = devOption.join(", ")

    alert(`Nome: ${name} \n Cor primaria: ${color} \n Gosta de programação: ${radio} \n Conhecimentos em programação Web ${devChecked}`)


}
