class Fila {
    constructor() {
        this.fila = []
        this.lenFila = 0
    }

    adicionar(elemento) {
        this.fila.push(elemento)
        this.lenFila++
    }

    remover() {
        if (this.lenFila == 0) {
            console.log("A fila já está vazia. Nenhum elemento foi removido")
            return false
        }
        else {
            this.fila.splice(0,1)
            this.lenFila--
        }
    }

    visualizar() {
        console.log(this.fila)
    }
}

let teste = new Fila

teste.adicionar(5)
teste.adicionar(10)
teste.adicionar(15)
teste.adicionar(7)
teste.visualizar()
teste.remover()
teste.visualizar()
teste.adicionar(20)
teste.visualizar()

