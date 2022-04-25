/*
Uma calculadora de IMC:

imc = peso / altura²
    se IMC menor 18,5 : abaixo do peso
    se IMC maior 18,5 e menor que 24,9 : peso normal
    se IMC maior ou igual a 25 e menor que 29.9: sobrepeso
    se IMC maior ou igual a 30 e menor que 34,9: obesidade grau I
    se IMC maior ou igual a 35 e menor que 39,9: obesidade grau II
    se IMC maior ou igual a 40 : obesidade grau III ou mórbida

*/

//dar entrada no peso e na altura

let peso = Number(prompt("Entre com o seu peso: "));
let altura = Number(prompt("Entre com a sua altura: "));

//calculo do IMC
let imc = (peso / altura ** 2).toFixed(2);

//condicionais
if(imc < 18.5){
    document.write(`Imc ${imc} : Abaixo do peso`);

}else if (imc >=18.5 && imc < 24.9){
    document.write(`Imc ${imc} : Peso Normal`);
}else if (imc >=25 && imc < 29.9){
    document.write(`Imc ${imc} : Sobrepeso`);
}else if(imc >=30 && imc < 34.9) {
    document.write(`Imc ${imc} : Obesidade Grau I`);
}else if(imc >=35 && imc < 39.9) {
    document.write(`Imc ${imc} : Obesidade Grau II`);
}else{
    document.write(`Imc ${imc} : Obesidade Mórbida`)
}

