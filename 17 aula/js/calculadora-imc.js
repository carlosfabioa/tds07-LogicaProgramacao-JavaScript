//capturar os eventos do formulário
const formulario = document.querySelector("#formulario"); //o # indica que é um ID

//vamos escutar os eventos no HTML com método addEventLister()
formulario.addEventListener('submit', function(event){
    event.preventDefault(); //muda o comportamento padrão do formulário que estamos escutando

    const inputPeso = event.target.querySelector("#peso"); //pegando o input peso
    const inputAltura = event.target.querySelector("#altura") //pegando o input altura
   
    const peso = Number(inputPeso.value); //pegando o valor que está digitado dentro do input
    
    const altura = Number(inputAltura.value) //pegando o valor está digitado dentro do input


    //chamando a função imc
    //a função imc recebe como parâmetro as variáveis peso e altura;
    //retorna o valor do imc calculado. Ele é guardado na variável imc
    const imc = calcularImc(peso, altura);

    //chamando a função tabelaIMC, que retorna em qual grupo a pessoa está 
    const classificacao = tabelaImc(imc);
    

    mostrarResultado(classificacao);
    
});

//função para calcular o IMC, retorna o valor do imc com duas casas decimais
function calcularImc(peso, altura){
    let imc = (peso / altura ** 2);
    return imc.toFixed(2);
}




//função para classificar em qual grau de imc a pessoa está 
function tabelaImc(imc){
    const classificacao = ['abaixo do peso', 'peso normal', 'sobrepeso',
                            'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];
    if(imc >= 39.9) return classificacao[5];
    if(imc >= 34.9) return classificacao[4];
    if(imc >= 29.9) return classificacao[3];
    if(imc >= 24.9) return classificacao[2];
    if(imc >= 18.5) return classificacao[1];
    if(imc < 18.5) return classificacao[0];
}


function mostrarResultado(msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = msg;
    
    
}