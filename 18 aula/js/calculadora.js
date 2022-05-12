const calculadora = document.querySelector("#calculadora")

//pegando todos os botões que estão no html
const botao = document.querySelectorAll(".btn-num")
//pegando o elemento display que está no html
const display = document.querySelector(".display")


//evento para ficar escutando o click
calculadora.addEventListener("click", function(e){
    const elemento = e.target;

    if(elemento.classList.contains("btn-num")) mostraDisplay(elemento);
    if(elemento.classList.contains("btn-igual"))calcularDisplay();
    if(elemento.classList.contains("btn-apagar"))apagarDisplay();
    if(elemento.classList.contains("limpar"))limparDisplay();
})

//função para mostrar no display
function mostraDisplay(elemento){
    const texto = elemento.textContent;
    display.textContent += texto;
}

//função para fazer as operações matemática
function calcularDisplay(){
    const resultado = eval(display.textContent);
    display.textContent = resultado;
}

//função para apagar o display
function apagarDisplay(){
    display.textContent = display.textContent.slice(0,-1);
}

//funcão para limpar o display
function limparDisplay(){
    display.textContent = " ";
}