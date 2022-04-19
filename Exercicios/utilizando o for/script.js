let nave = prompt("Qual é o nome da espaçonave?")
let inserir = prompt("Qual letra você quer inserir?")
let sub = prompt("Por qual letra você deseja substituir?")
novaNave = ""
//usando o for para fazer a troca da letra

for(let l = 0; l < nave.length; l++){
    if(nave[l] == sub) {
        novaNave += inserir
    } else {
        novaNave += nave[l]
    }
    
}
alert(`Nome antigo: ${nave} \n Novo nome: ${novaNave}`)