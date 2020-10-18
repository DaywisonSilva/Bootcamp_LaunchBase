const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

// configura os arquivos estáticos
server.use(express.static('public'));

//vou setar qual o motor de view
server.set('view engine', "njk");

//configura em qual página o nunjucks vai funcionar
nunjucks.configure("views", {
    express:server,
})

server.listen(5000, () => {
    console.log('server is runing');
})

server.get('/', (req, res) => {
    res.render("index")
})

server.get('/conteudo', (req, res) => {
    res.render("conteudo")
})
