# language: pt
Funcionalidade: Gestão de Vendas e estoque do Batera Clube

 Como administrador da loja Batera Clube
 Quero controlar a baixa de estoque nas vendas
 Para evitar vender produtos indisponíveis 
    Cenario: realizar venda com estoque suficiente
    Dado que o produto "Baqueta Liverpool 5B extra long" possui 2 unidades em estoque
    Quando eu realizar a venda de 1 unidade
    Entao o estoque atual do produto deve ser 1 unidade

    Cenario: Bloquear venda com estoque insuficiente
    Dado que o produto "Prato Crash Zildjian A Custom 18" possui 2 unidades em estoque
    Quando eu tentar realizar a venda de 3 unidades
    Entao a venda não deve ser concluída e o estoque permanecer com 2 unidades
    
    Cenario: Impedir venda com quantidade invalida (zero ou negativa)
    Dado que o produto "Pedal Duplo Pearl Eliminator" possui 5 unidades em estoque
    Quando eu tentar realizar a venda de 0 unidades
    Entao a venda não deve ser concluída e o estoque permanecer com 5 unidades
     
 
 