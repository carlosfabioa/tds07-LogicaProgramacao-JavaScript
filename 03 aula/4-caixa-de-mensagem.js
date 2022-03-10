/**
 ALERT
 * Mostra uma mensagem simples com apenas o botão ok
 * Basta inserir o conteudo que será mostrado na caixa de texto dentro dos parenteses
 * 
 */

 alert("clique no botão");

 //podemos passar uma variável no alert
 let buscador = "google.com.br";
 alert("Buscador: " + buscador); //o sinal de mais nesse caso significa concatenação 

 /**
  PROMPT
  * Possibilita uma entrada de texto
  * O texto pode ser atribuído a uma variável
  */

  let nome;
  nome = prompt("por favor digite o seu nome: ");
  document.write(nome);

  nome = prompt("Por favor digite o seu nome: ", "digite o seu nome aqui!")
  document.write(nome);

  /**
   CONFIRM
   * Apresentar dois botões: OK e Cancelar
   * O botão OK retorna o valor true (verdadeiro)
   * O botão Cancelar retorno o valor false (falso)
   */

   let opcao; //criando a variável

   opcao = confirm("Deseja continuar"); //atribui a variavel o valor digitado pelo usuario
   document.write("<br>")
   document.write(opcao)


