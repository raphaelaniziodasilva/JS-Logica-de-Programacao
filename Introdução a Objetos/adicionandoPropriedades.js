/* Temos duas maneiras para adicionar novas propriedades ao objeto 
primeira = obejeto.novaPropriedade = valor
segunda = objeto["novaPropriedade"] = valor 
*/

//ex: Adicione armadura e armas para o guerreiro lendário
let warrior = {

}
// adicionando peças lendárias da armadura
warrior.helmet = "Capacete de Aquiles"
warrior.bracers = "Manoplas de Agamemnon"
warrior.armor = "Armadura do Imortal"
warrior.belt = "Cinto do lutador da Arena"
warrior.boots = "Botas do herói de Guerra espartano"

console.log(warrior)

let weapons = {
    
}
// adicionando armas lendárias
weapons["swords"] = "Sika de Prometheus"
weapons["daggers"] = "Adaga de Kronus"
weapons["trident"] = "Tridente de Poseidon"
weapons["bow"] = "Arco de Herácles"

console.log(weapons)
