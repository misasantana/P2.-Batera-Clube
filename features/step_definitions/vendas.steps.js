const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Produto = require('../../Produto');

let produtoAtual;

Given('que o produto {string} possui {int} unidades em estoque', function (nome, estoqueInicial) {

    produtoAtual = new Produto(nome, 'Batera Clube', 0, estoqueInicial)
});

When('eu realizar a venda de {int} unidade', function (quantidade) {
    produtoAtual.vender(quantidade);
});

When('eu tentar realizar a venda de {int} unidades', function (quantidade) {
    produtoAtual.vender(quantidade);
});

Then('o estoque atual do produto deve ser {int} unidade', function (estoqueEsperado) {
    assert.strictEqual(produtoAtual.estoque, estoqueEsperado);
});

Then('a venda não deve ser concluída e o estoque permanecer com {int} unidades', function (estoqueEsperado) {
    assert.strictEqual(produtoAtual.estoque, estoqueEsperado);
});
