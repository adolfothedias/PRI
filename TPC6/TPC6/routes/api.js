const express = require('express')
const router = express.Router()
var {ObjectId} = require('mongodb');

var Filmes = require('../controllers/filmes')

router.get('/filmes', function (req,res) {
    Filmes.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/filmes/:idFilme', function (req,res) {    
    Filmes.consultar(req.params.idFilme)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.post('/filmes', function (req,res) {    
    Filmes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.delete('/filmes/:idFilme', function (req,res) {    
    Filmes.eliminar(req.params.idFilme)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router