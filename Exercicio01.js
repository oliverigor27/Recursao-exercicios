// Usando recursividade, calcule a soma de
// todos os valores de um array de reais

class Exercicio01 {
    constructor() {
        console.log(this.calcArr([], 10))
    }

    calcArr(data, n) {
        if(n == 0) return 0;

        return data[n-1] + this.calcArr(data, n - 1);
    }
}

const teste = new Exercicio01();

teste;