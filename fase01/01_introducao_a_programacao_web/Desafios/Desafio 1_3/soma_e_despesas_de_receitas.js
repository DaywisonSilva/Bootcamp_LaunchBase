const usuarios = [
    {
        nome: "Salvio",
        receitas: [10, 10, 10, 10],
        despesas: [2.5, 2.5, 2.5, 2.5]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];


for (let i = 0; i < usuarios.length; i++) {
    let saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)
    console.log(`O ${usuarios[i].nome} tem saldo igual a ${saldo.toFixed(2)}`);
    if(saldo < 0){
        console.log(`Você tem saldo negativo!`)
    }else{
        console.log(`Você tem saldo positivo!`)
    }
    console.log(" ");
}

function calculaSaldo(receitas, despesas) {
    let receita = somaNumeros(receitas);
    let despesa = somaNumeros(despesas);
    return receita - despesa;
}

function somaNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}