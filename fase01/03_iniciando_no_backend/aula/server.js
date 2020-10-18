const express = require('express');

// executa o express
const server = express();

server.get('/', (req, res) => {
    
})

server.listen(5000, () => {
    console.log('Server is running');
})