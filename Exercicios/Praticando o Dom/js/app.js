
// este arquivo vai ser o arquivo da aplicação onde vou colocar todas as funções que precisa cadastrar, remover e limpar o formulario
class App {
    // metodo para adiconar uma propriedade
      addProperty() { 
        event.preventDefault()// esse evento vai ser chamado direto no botão que vai esta no arquivo main.js
    // chamando o html para atribuir as propriedades
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked
    // instanciar a classe property
        let property = new Property(kind, area, rented)// cirei o objeto
    // agora vamos chamar uma função que aida vai ser criada
        this.addOnPropertiesList(property)
    // depois vamos criar a função para limpar o formulario
        this.cleanForm()
      }
    // criando a função addOnPropertiesList
      addOnPropertiesList(property) {
        //criar elemento que vai ser adicionado dentro da ul do html que vai ser o li
        let listElement = document.createElement("li")
    // montar a string que vai ser adicionada dentro da li
        let propertyInfo = " Tipo: " + property.kind + " (Área: " + property.area + "m²)"
    //vamos verificar se a propriedade esta alugada
        if(property.rented) {
          let rentedMark = this.createRentedMark()// marca
    //adicionando a marca dentro da li
          listElement.appendChild(rentedMark)
        }
    // adicionando o texto propertyInfo dento do html
        listElement.innerHTML += propertyInfo
    //criar o botão de remoção - função que ainda vai ser criada
        let buttonToRemove = this.createRemoveButton()
    // assim que o botão for criado adicione dentro do novo elemento ou seja li
        listElement.appendChild(buttonToRemove)
    //agora que o elemento foi criado vamos adicionar dentro da lista ul que esta no html
        document.getElementById("properties").appendChild(listElement)
      }
    //criando a marca de alugado
      createRentedMark() {
        //criar elemento span para adicionar o texto alugado
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "white" // cor da fonte
        rentedMark.style.backgroundColor = "red"// cor de fundo
        rentedMark.innerText = "ALUGADO"// palavra alugado adicionado
        return rentedMark
      }
    // criar o botão de remover
      createRemoveButton() {
        let buttonToRemove = document.createElement("button") // botão criado
        buttonToRemove.setAttribute("onclick", "app.remove()")//adicionar atributo onclick
        buttonToRemove.innerText = "Remover" //nome do botão
        return buttonToRemove
      }

    // limpar formulario, criando a função para limpar os input e checkbox
      cleanForm() {
        document.querySelector("input[name='area']").value = "" // input
        document.querySelector("input[name='rented']").checked = false //checkbox
      }
    // criando a função remover do botão
      remove() {
        let liToRemove = event.target.parentNode
        document.getElementById("properties").removeChild(liToRemove)
      }
    }
    