/* O get que é utilizado para retornar um valor como uma variável*/
class Station {
    constructor(name, monthlyProcessLoad) {
        this.name = name
        this.monthlyProcessLoad = monthlyProcessLoad
    }
    
    get weeklyProcessLoad() {
        return this.monthlyProcessLoad / 4
    }
}
let recourceProcess = new Station("Gold", 300)
console.log(recourceProcess)
console.log(recourceProcess.weeklyProcessLoad)

recourceProcess.monthlyProcessLoad = 800
console.log(recourceProcess.weeklyProcessLoad)