//Chamando o id do formulário como escopo global
let houseList = document.querySelector("#houseList") // vai receber os elementos adicionados

function saveHouse() { // adicionar elemento
    
  //Chamando todos os ids do formulário
    let area = document.querySelector("#area").value // valor da area
    let number = document.querySelector("#number").value // valor do numero
    let neighborhood = document.querySelector("#neighborhood").value // bairro
    let city = document.querySelector("#city").value // valor da cidade

  // criar um elemento li que vai ser adicinado na ul houseList
    newListValue = document.createElement("li")
  // adicionando um texto dentro da li cirada
    newListValue.innerText = `${area} m² número: ${number} (${neighborhood} - ${city}) `

 //  vamos adicionar o elemento li dentro da ul do html
    houseList.appendChild(newListValue)

 // criando o botão de remover
    let removeButton = document.createElement("button")
    removeButton.type = "button" // propriedade tipo
    removeButton.innerText = "Remover" // nome do botão
    removeButton.setAttribute("onclick","removeHouse(this)") // evento onclick

 // adicionando o removeButton dentro do elemento li para poder remover o li inteiro
    newListValue.appendChild(removeButton)

}

// Agora vamos criar a função remover para remover o elemento adicionado
function removeHouse(button) {
    let removeLi = button.parentNode
 // removendo todo o elemento adicionado na lista
    houseList.removeChild(removeLi) 
}
