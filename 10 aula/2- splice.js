/**
 SPLICE
 * sempre retorna um array de elementos removidos
 * 
 SINTAXE
    array.splice(indice, delete, elemento1, element2...elementoN)
    *** se eu colocar 0 no delete eu adiciono elementos
 */
// indices neg. -5          -4      -3      -2      -1
//  indice      0           1       2       3       4
var compras = ['arroz', 'feijao', 'oleo', 'sal','batata'];

var removidos = compras.splice(1,2);
console.log(compras);
console.log(removidos);

var removidos = compras.splice(-2,1);
console.log(removidos);


var adicionados = compras.splice(3,0, 'velho barreiro');



