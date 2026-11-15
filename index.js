const Produto = require('./Produto');

const minhaBaqueta = new Produto('Baqueta Liverpool 5B extra long', 'Percussão', 23.90, 2);
const meuPrato = new Produto('Prato Crash Zildjian A Custom 18"', 'Pratos', 2400.00, 2);

console.log("--- CATÁLOGO BATERA CLUBE ---");
console.log(minhaBaqueta.obterDetalhes());
console.log(meuPrato.obterDetalhes());

console.log("\n--- SIMULANDO VENDAS ---");
minhaBaqueta.vender(1);
meuPrato.vender(3);