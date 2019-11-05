var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:3069/api/filmes')
  .then(dados => {
    res.render('lista-filmes',{lista:dados.data})
  })
  .catch(erro =>{
    res.render('error',{error:erro})
  })
});


router.get('/inserir', function(req, res, next) {
  res.render('form-filme')
});

router.post('/',function(req, res, next) {
  axios.post('http://localhost:3069/api/filmes', req.body)
  .then(dados => {
    res.redirect('/filmes')
  })
  .catch(erro =>{
    res.render('error',{error:erro})
  })
});


router.delete('/:idFilme', function(req, res, next) {
  var id = req.params.idFilme
  axios.delete('http://localhost:3069/api/filmes/' + id)
  .then(res.redirect(303,'/'))
  .catch(erro =>{
    res.render('error',{error:erro})
  })
});


router.get('/:idFilme', function(req, res, next) {
  var id = req.params.idFilme
  axios.get('http://localhost:3069/api/filmes/' + id)
  .then(dados => {
    res.render('single-filme',{filme:dados.data})
  })
  .catch(erro =>{
    res.render('error',{error:erro})
  })
});

module.exports = router;