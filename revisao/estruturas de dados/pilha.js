class Pilha {
    constructor() {
        this.pilha = []
        this.lenPilha = 0
    }

    adicionar(elemento) {
        this.pilha.push(elemento)
        this.lenPilha++
    }

    remover() {
        this.pilha.splice(this.lenPilha-1, 1)
        this.lenPilha--
    }

    visualizar() {
        console.log(this.pilha)
    }
}

let teste = new Pilha
for (let i=1; i<=5; i++) {
    teste.adicionar(i)
}

teste.visualizar()
teste.remover()
teste.remover()
teste.visualizar()