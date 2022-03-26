/**
ARRAY
- Array são descritos como lista de objetos(objetos que contem multiplos valores)
- Um objeto array pode ser armazenado numa variável
- Podemos acessar individualmente os valores dentro do array
- Se não tivessemos um array, teriamos que armazenar cada item em uma variavel separada
- Arrays são indexados
        indices           0        1       2
        const nomes = ['maria', 'jose', 'pedro'];
 */

//CRIANDO UM ARRAY (forma literal)
let listaCompras = ["arroz", "feijao", "batata", "cerveja"]; //usa-se cochetes para declaras os arrays
console.log(listaCompras); 

//CRIANDO UM ARRAY USANDO UM CONSTRUTOR
const nomes = new Array('Joao', 'Adriana', 'Klayton');
console.log(nomes);

//ACESSANDO UM ELEMENTO DO ARRAY
console.log(nomes[0]);

//MODIFICAR UM ITEM DE UM ARRAY
listaCompras[1] = 'velho barreiro';
console.log(listaCompras)

//COMPRIMENTO DO ARRAY (atributo length)
const tamanho = listaCompras.length;
console.log(tamanho);

var nome = "carlos fabio andrade" //na string também dá para usar o length
console.log(nome.length);

//mostrar todos os elementos da minha lista de compras
console.log(listaCompras[0])
console.log(listaCompras[1])
console.log(listaCompras[2])
console.log(listaCompras[3])

console.log('------------------')
for(let i=0; i < listaCompras.length; i++){
    console.log(listaCompras[i]);
}

//DELETAR UM ELEMENTO DO ARRAY (remover o elemento não altera o indice)
delete listaCompras[2];
console.log(listaCompras);

// ********* ALGUMAS FUNÇÕES *********
let listaAlunos = ['Gabriel', 'Gabriel', 'Luciano', 'Klayton', 'Tiago',
                'Douglas', 'Adriana', 'Giulliano', 'Joao']

//pop() (remove um elemento no final do array) 
listaAlunos.pop();
listaAlunos.pop();
console.log(listaAlunos);

//shift() (remove no início do array)
listaAlunos.shift();
listaAlunos.shift();
console.log(listaAlunos);

//push() (adiciona um elemento ao final do array)
listaAlunos.push('Joao');
console.log(listaAlunos);

//unshift() (adicina um elemento no início do array)
listaAlunos.unshift('Gabriel');
console.log(listaAlunos);

//FATIANDO UM ARRAY - slice()
let listaAlunos1 = ['Gabriel', 'Gabriel', 'Luciano', 'Klayton', 'Tiago',
                'Douglas', 'Adriana', 'Giulliano', 'Joao']

const novaListaALunos = listaAlunos1.slice(3, -3);
console.log(novaListaALunos);

//CONVERTER UMA STRING EM UM ARRAY - split()
console.log("-----------------")
var nome = 'carlos fabio andrade';
console.log(nome);
arrayNome = nome.split(' ');
console.log(arrayNome);

var poema = 'Quando eu for, um dia desses \
Poeira ou folha levada\
No vento da madrugada,\
Serei um pouco do nada\
Invisível, delicioso\
\
Que faz com que o teu ar\
Pareça mais um olhar,\
Suave mistério amoroso,\
Cidade de meu andar\
(Deste já tão longo andar! '

console.log(poema);

var arrayPoema = poema.split(' ');
console.log(arrayPoema);

//TRANSFORMA ARRAY EM STRING - join

var textoPoema = arrayPoema.join(' ');
console.log(textoPoema);

textoCSV = "arroz;23;feija;12;oleo;10;"
console.log(textoCSV);

arrayCSV = textoCSV.split(';');
console.log(arrayCSV);


