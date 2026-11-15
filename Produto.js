class Produto {

    constructor(nome, categoria, preco, estoque) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.estoque = estoque;
    }

    obterDetalhes() {
        return `[${this.categoria}] ${this.nome} - R$ ${this.preco.toFixed(2)}`;
    }

    vender(quantidade) {
        if (quantidade <= this.estoque) {
            this.estoque -= quantidade;
            console.log(`Venda realizada! Estoque atual de '${this.nome}': ${this.estoque} unidades.`);
        } else {
            console.log(`Estoque insuficiente para vender ${quantidade} unidades de ${this.nome}.`);
        }
    }

}
module.exports = Produto;