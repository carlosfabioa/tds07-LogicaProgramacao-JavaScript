/**
 OPERADORES DE COMPARAÇÃO
 >          maior
 >=         maior e igual
 <          menor
 <=         menor e igual
 ==         igual
 ===        estritamente igual
 !=         diferente
 !==        estritamente diferente
 */

 let num1 = 10;
 let num2 = 4;
 let num3 = 10;
 let num4 = "10";

 //MAIOR
 console.log(`O ${num1} é maior que ${num2}: `, num1 > num2);

 //MENOR
 console.log("_______________________");
 console.log(`O ${num1} é menor que  ${num2}: `, num1 < num2);

 //IGUAL
console.log("_______________________");
console.log(num1 == num2);
console.log(num1 == num3);
console.log(num1 == num4); //compara somente o valor 

//ESTRITAMENTE IGUAL
console.log("_______________________");
console.log(num1 === num2);
console.log(num1 === num3);
console.log(num1 === num4); //compara o valor e o tipo 

//DIFERENTE
console.log("_______________________");
console.log(num1 != num2);
console.log(num1 != num3);
console.log(num1 != num4); //compara somente o valor

//ESTRITAMENTE DIFERENTE
console.log("_______________________");
console.log(num1 !== num2);
console.log(num1 !== num3);
console.log(num1 !== num4); //compara o valor e tipo

