/**
 OPERADORES LÓGICOS
 &&     AND     E       -> se ambas expressões forem verdadeiros, retorna true
 ||     OR      OU      -> se uma das expressões forewm verdadeiras, retorna true
 !      NOT     NÃO     -> negação (inverte o valor lógico)
 * 
 */

 //AND - &&
 console.log(true && true);
 console.log(false && true);
 console.log(true && false);
 console.log(false && false);
 console.log(true && true && false && true && true);

 //OR - ||
 console.log("____________");
 console.log(true || true);
 console.log(true || false);
 console.log(false || true);
 console.log(false || false);
 console.log(false || false || true || false);

 //NOT - !
 console.log("________")
 console.log(!true);
 console.log(!!true); //quando eu nego duas vezes ele retorna o valor original