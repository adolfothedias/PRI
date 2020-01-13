var express = require('express');
var router = express.Router();
var Pubs = require('../controllers/pub')

/* GET home page. */
router.get('/pubs', function(req, res, next) {
  if(req.query.type,req.query.year){
    Pubs.consultarTypeYear(req.query.type,req.query.year)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  } else if (req.query.type){
    Pubs.consultarType(req.query.type)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  } else if(req.query.autor){
    Pubs.consultarAutor(req.query.autor)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  } else {
    Pubs.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/pubs/:id', function(req, res, next) {
  Pubs.consultar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/types', function(req, res, next) {
    Pubs.consultarTypes()
      .then(dados => res.jsonp(dados.sort()))
      .catch(erro => res.status(500).jsonp(erro))
});

router.get('/autores', function(req, res, next) {
  Pubs.consultarAutores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});
module.exports = router;
