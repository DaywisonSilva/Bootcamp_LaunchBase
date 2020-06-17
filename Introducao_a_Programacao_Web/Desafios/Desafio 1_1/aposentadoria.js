// Cálculo de aposentadoria

const nome = "Marcos";
const sexo = "M";
const idade = 48;
const contribuicao = 35;

const somaIdadeContribuicao = idade + contribuicao;

if(sexo === "F"){
    if(contribuicao >= 30 && somaIdadeContribuicao >= 85){
        console.log(`${nome}, você pode se aposentar!`)
    }else{
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}else if(sexo === "M" && somaIdadeContribuicao >= 95){
    if(contribuicao >= 35){
        console.log(`${nome}, você pode se aposentar!`)
    }else{
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}
