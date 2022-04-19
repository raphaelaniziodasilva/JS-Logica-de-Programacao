var piloto = prompt("Se identifique piloto!")
velocity = 0
alert(`Velocidade inical da espaço nave ${velocity}`)
var NewVelocity = prompt("Piloto qual vai ser a velocidade ?")
var confirmVelocity = confirm(`A nossa espaçonave esta atiginda a velocidade ${NewVelocity}km/s`)
if (confirmVelocity) {
    velocity = NewVelocity
}

if (velocity <= 0) {
    alert(`Velocidade ${velocity}km/s a Nave está parada aumente a velocidade`)
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if (velocity < 80 ) {
    alert("Parece uma boa velociidade para manter")
} else if (velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado")
}
alert(`${piloto} \n Velocidade atual ${velocity}`)

