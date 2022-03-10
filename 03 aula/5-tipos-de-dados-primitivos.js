/**
 TIPOS DE DADOS PRIMITIVOS
 * Tipos: Number, String, Undefined, Null, Booleano, Symbol
 * Para ver o typo de uma variável usa-se a função typeof(nome_variável)
 */

//NUMBER
//Pode ser decimal, ponto flutuante, inteiro negativo ou hexadecimal
const num0 = 3;
const num1 = 4;
let soma = num0 + num1; //nesse caso o + soma os dois números
console.log(soma);
console.log(typeof(num0)); //a função typeof mostra o tipo de dados da variável

//STRING
const nome = "carlos";
const sobrenome = "andrade";
document.write(nome, " ", sobrenome);
console.log("o sobrenome é uma: ", typeof(sobrenome));

//As strings são indexadas
document.write("<br>")
document.write(nome[3]);
document.write("<br>")
document.write(nome[5]);

//UNDEFINED
//Quando a variável é declarada e não é inicializada
let nome1;  //defini a variável, mas não inicializei
alert(nome1);

//NULL
//Usada quando o programador quer colocar o valor de uma variável como nulo
let variavel = null;
console.log("Variável do tipo null: ", variavel)

//BOOLEANO
//Só tem duas possibilidades: TRUE ou FALSE
let aprovado = true;
console.log(typeof(aprovado));

//SYMBOL