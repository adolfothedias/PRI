var express = require('express');
var router = express.Router();
//const axios = require('axios')

var Obras = require('../controllers/obras')

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.periodo){
    Obras.filtrarPeriodo(req.query.periodo)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.anoCriacao){
    Obras.filtrarAno(req.query.anoCriacao)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  } else if(req.query.compositor){
    Obras.filtrarCompositor(req.query.compositor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  } else {
    Obras.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
});



module.exports = router;
