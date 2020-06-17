const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function mostrarusuarios(){
    for(let i=0; i<usuarios.length; i++){
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
        if(usuarioTrabalhaComCSS){
            console.log(`${usuarios[i].nome} trabalha com CSS`)
        }else{
            console.log(`${usuarios[i].nome} não trabalha com CSS`)
        }
    }
    
}

function checaSeUsuarioUsaCSS(usuario){
    if(usuario.tecnologias.indexOf("CSS") != -1){
        return true;
    }else{
        return false;
    }
}

mostrarusuarios();
