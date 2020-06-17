//---------- AULA 1 -------------------
// const nome = 'Mayk Bootcamp';
// console.log(nome);


// --------- AULA 2 --------------------
// Criar um programa que calcula a média das notas entre os alunos e envia mensagem do cálculo da média.

// const nome = "Mayk"
// const nome2 = 'Diego ${nome}'
// const nome3 = `Valeska e ${nome}`

// console.log(nome2)

// --------- AULA 3 ---------------------
// const aluno01 = "Mayk"
// const notaAluno01  = 9.8

// const aluno02 = 'Diego'
// const notaAluno02 = 10

// const aluno03 = 'Fulano'
// const notaAluno03 = 2

// const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3
// console.log(media)

// --------- AULA 4 ---------------------

// const aluno01 = "Mayk"
// const notaAluno01  = 9.8

// const aluno02 = 'Diego'
// const notaAluno02 = 10

// const aluno03 = 'Fulano'
// const notaAluno03 = 2

// const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

//Se a média for maior que 5, parabenizar a turma
// if (media > 5){
//     console.log(`A nota foi de ${media}. Parabéns!!`)
// }else{
//     console.log('A média é menor que 5')
// }

// --------- AULA 5 ---------------------

/*  OPERADORES DE COMPARAÇÃO
    
    >        Maior
    <        Menor
    >=       Maior ou igual a 
    <=       Menor ou igual a 
    ==       Igual a
    ===      Igual e do mesmo tipo
    !=       Diferente de
    !==      Diferente, inclusive o tipo
*/

// console.log( 5 > 4 ) //true
// console.log( 5 < 4) // false
// console.log( 5 >= 4 ) // true
// console.log( 4 <= 4 ) // true

// console.log( 4 == '4' ) // true
// console.log( 4 === '4') // false
// console.log( 4 != '4' ) // false
// console.log( 4 !== '4' ) // false


//------------- DESAFIO 1
const idade = 18
// verificar se a pessoa tem idade maior ou igual a 18 anos se sim, deixar entrar, senão, bloquear a entrada
// se a pessoa tiver 17 AnalyserNode, avisar para voltar quando fizer 18 anos 
// if( idade < 18 || idade === 17 ){
//     console.log('Bloquear entrada')
// }else{
//     console.log('Deixar entrar')
// }

// --------- AULA 6 ---------------------
/*
    OPERADORES LÓGICOS
    && "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira

    || "OU" Uma das condições deve ser verdadeira para que a condição final seja verdadeira

    ! "NÂO" Nega uma condição
*/

// console.log( 5 == 5 && 6 == 6 ) // true
// console.log( 5 == 5 && 6 != 6 ) // false

// console.log( 5 != 5 || 6 == 6 ) // true
// console.log( 5 == 5 || 6 != 6 ) // true

// console.log(!(5 > 6)) // true
// console.log(!(5 < 6)) // false

// ------------ AULA 8 -------------------

const alunos = [
    {
        nome: "Mayk",
        nota: 9.8
    },
    
    {
        nome: "Diego",
        nota: 10
    },

    {
        nome: "Fulano",
        nota: 2
    }
]


const media = ((alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3);

const nomeDeAlunos = (alunos[0].nome+" "+ alunos[1].nome+" "+ alunos[2].nome)

console.log(nomeDeAlunos);
console.log(media);

var aluno1 = [0, 1, 2]

