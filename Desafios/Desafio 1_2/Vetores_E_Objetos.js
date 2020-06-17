const programador = [
    {
        nome: "Diego",
        idade: 22,
        tecnologia: [
            { nome: "Javascript", especialidade: "Web/Mobile"},
            { nome: "C++", especialidade: "Desktop"}
        ]
    }
]

console.log(`O usuário ${programador[0].nome} tem ${programador[0].idade} e usa a tecnologia ${programador[0].tecnologia[0].nome} com especialidade em ${programador[0].tecnologia[0].especialidade}`);
