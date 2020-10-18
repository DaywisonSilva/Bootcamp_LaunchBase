const express = require('express');
const nunjucks = require('nunjucks');

// executa o express
const server = express();

// configurando a pasta de arquivos estáticos
server.use(express.static('public'));

//configurando a template engine
server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server,
})

// Configurando as rotas
server.get('/about', (req, res) => {
    res.render("about");
})

server.get('/portfolio', (req, res) => {
    res.render("portfolio");
})

server.listen(5000, () => {
    console.log('Server is running');
})













