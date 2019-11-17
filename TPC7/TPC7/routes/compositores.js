var express = require('express');
var router = express.Router();
//const axios = require('axios')

var Obras = require('../controllers/obras')

/* GET users listing. */
router.get('/', function(req, res, next) {
    Obras.listarCompositor()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:nome', function(req, res, next) {
  Obras.listarObrasCompositor(req.params.nome)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});



module.exports = router;
