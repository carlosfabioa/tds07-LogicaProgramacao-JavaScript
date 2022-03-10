/**
* Para declarar uma variável não precisar informar o tipo de dados 
* Podemos usar a palavra reservada var
* usamos o operador de atribuição =
 */

document.write(" O João nasce em 1982 <br>\
                Em 2000, O João conheceu a Maria <br>\
                O João, casouse com a Maria em 2012 <br>\
                A Maria teve um filho do João em 2015");

var nome; //declarando a variável
nome = 'Pedro'; //inicializando a variável
var nome1 = 'Maria'; //declarando e inicializando a variável

document.write("<br> <hr>")

document.write(" O ", nome, " nasceu em 1982 <br>\
                Em 2000, O ", nome, " conheceu a ", nome1, "<br>\
                O ", nome, ", casou-se com a ",nome1," em 2012 <br>\
                A ",nome1, " teve um filho do", nome, "em 2015");