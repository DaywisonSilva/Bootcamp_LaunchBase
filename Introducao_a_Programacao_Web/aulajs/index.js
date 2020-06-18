//---------- AULA 1 -------------------
// const name = 'Mayk Bootcamp';
// console.log(name);


// --------- AULA 2 --------------------
// Criar um programa que calcula a média das grades entre os students e envia mensagem do cálculo da média.

// const name = "Mayk"
// const name2 = 'Diego ${name}'
// const name3 = `Valeska e ${name}`

// console.log(name2)

// --------- AULA 3 ---------------------
// const student01 = "Mayk"
// const gradeAluno01  = 9.8

// const student02 = 'Diego'
// const gradeAluno02 = 10

// const student03 = 'Fulano'
// const gradeAluno03 = 2

// const average = (gradeAluno01 + gradeAluno02 + gradeAluno03) / 3
// console.log(average)

// --------- AULA 4 ---------------------

// const student01 = "Mayk"
// const gradeAluno01  = 9.8

// const student02 = 'Diego'
// const gradeAluno02 = 10

// const student03 = 'Fulano'
// const gradeAluno03 = 2

// const average = (gradeAluno01 + gradeAluno02 + gradeAluno03) / 3

//Se a média for maior que 5, parabenizar a turma
// if (average > 5){
//     console.log(`A grade foi de ${average}. Parabéns!!`)
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
/*
const students = [
    {
        name: "Mayk",
        grade: 9.8
    },
    
    {
        name: "Diego",
        grade: 10
    },

    {
        name: "Fulano",
        grade: 2
    }
]


const average = ((students[0].grade + students[1].grade + students[2].grade) / 3);

const nameDeAlunos = (students[0].name+" "+ students[1].name+" "+ students[2].name)

console.log(nameDeAlunos);
console.log(average);

var student1 = [0, 1, 2]
*/

// Criar um programa que calcula a média das turmas de students eenvia mensagem do cálculo da média

const classA = [
    {
        name: "Mayk",
        grade: 1.8
    },

    {
        name: "Diego",
        grade: 10
    },

    {
        name: "Fulano",
        grade: 2
    },
    {
        name: "Mais um student",
        grade: 10
    }
]

const classB = [
    {
        name: "Cleiton",
        grade: 8
    },

    {
        name: "Robson",
        grade: 10
    },

    {
        name: "Siclano",
        grade: 2
    },
    {
        name: "Novo student",
        grade: 9
    }
]

function calculateAverage(students) {
    let soma = 0;
    for (let i = 0; i < students.length; i++) {
        soma += students[i].grade;
    }
    let average = soma / students.length;
    return average;
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats!`)
    } else {
        console.log(`${turma} average: ${average}. Is not good.`)
    }
}


function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
    
}

markAsFlunked(classA)

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentReprovados(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}


const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

studentReprovados(classA)
studentReprovados(classB)

sendMessage(average1, 'classA');
sendMessage(average2, 'classB');
