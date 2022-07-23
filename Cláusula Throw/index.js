/* Throw é um comando para agente conseguir lançar os nossos proprios erros ou seja quando você quer lançar uma menssagem de erro.
Ex: Vamos criar uma classe aonde vamos usar para criar uma arma de uma nave de batalha aonde ela vai conter um número de identificação dessa arma e o número de tiro restante. */
class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotLeft = 5 //--> tiros restantes
    }
    /* Vamos criar um método para a arma poder da um disparo*/
    shoot() {
        /* Quando a munição da arma zerar ou seja ela não atira */
        if(this.shotLeft > 0) {
            console.log("Bang!!")
            this.shotLeft -= 1
        } else {
            /* Quando a arma estiver sem munição vai aparecer uma menssagem de erro alertando que não tem mais disparos disponiveis. Para isso vamos usar o comando throw new Error */
            throw new Error(`Arma ${this.identifier} sem munição`)
        }
        
    }
}

let fenixWeapon = new SpaceshipWeapon(1421)
console.log(fenixWeapon)
/* Vamos atirar */
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
/* Imprimr o resultado */
console.log(fenixWeapon)