// Cálculo de IMC

const nome = "Daywison";
const peso = 100;
const altura = 1.88;

const imc = peso / (altura**2);

if(imc >= 30){
    console.log(`${nome}, você está acima do peso!`)
}
if(imc < 30){
    console.log(`${nome}, você não está acima do peso!`)
}


