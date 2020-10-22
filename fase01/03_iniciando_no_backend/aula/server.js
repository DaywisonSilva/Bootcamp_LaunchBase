const express = require('express');
const nunjucks = require('nunjucks');

// executa o express
const server = express();

// pegando os vídeos
const videos = require('./data')

// configurando a pasta de arquivos estáticos
server.use(express.static('public'));

//configurando a template engine
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

// pegando os dados de about
const about = require('./about')

// Configurando as rotas
server.get('/about', (req, res) => {
    res.render("about", {about});
})

server.get('/', (req, res) => {
    res.render("about", {about});
})

server.get('/portfolio', (req, res) => {
    res.render("portfolio", { items: videos });
})

server.listen(5000, () => {
    console.log('Server is running');
})













