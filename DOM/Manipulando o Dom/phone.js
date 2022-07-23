// Vamo criar uma função para adicionar um novo telefone
function addNewPhone() {
    // selecionando os ids
    const PhoneForm = document.querySelector("form#phone")
    // Vamos clonar o flho do Phone que esta dentro do formulario
    const newPhone = PhoneForm.children[0].cloneNode(true)
    // Posição do novo telefone
    const phonePosition = PhoneForm.children.length +1
    // colocando um novo texo na label
    newPhone.querySelector("label").innerText = `Telefone ${phonePosition}`
    // Acrescentando esse novo elemento no Dom ou seja dentro do formulario
    PhoneForm.appendChild(newPhone)
   console.log(PhoneForm.children)
}

// Imprimir todos os telefone no alert
function Print() {
    // criar uma variavel vazia para receber os telefones
    let message = ""
    // Seleconar todos os input que tem no formulario
    const Phones = document.querySelectorAll("input[name='txtphone']")
    // vamos ércorrer o array que e criado usando foreach
    Phones.forEach((txtphone, index) => {
        message += `Telefones ${index +1}: ${txtphone.value} \n`
    })

    alert(message)

    
}