// inportar dependencia 
const express = require("express");
const path = require('path');
const pages = require('./pages.js')
    // iniciando o express
const server = express()

// ultilizando os arquivos estáticos 
server
    .use(express.static('public'))

// configurar tamplate engines
.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')


// Rotas da aplicação 
.get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

//Ligar o servidor
server.listen(5500)