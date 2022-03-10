let nome = "carlos"; //primeira variável
let sobrenome = "andrade"; //segunda variável

const PI = 3.14; //criei a constante

console.log("Nome: ", nome, sobrenome);
console.log("Valor do PI: ", PI);

document.write("Nome: ", nome, " ", sobrenome, '<br>');
document.write("Valor do PI: ", PI);

function mudar(){
    m = document.querySelector("teste");
    console.log(m)
    m.innerHTML = "novo texto";
}

