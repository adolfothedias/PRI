var express = require('express');
var router = express.Router();
var axios = require('axios')

var apikey = '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ';

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias' + apikey)
    .then(dados => res.render('index',{lista: dados.data}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:id', function(req, res, next) {
  var informacao = 'http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + apikey
  var entidades = 'http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '/elementos'  + apikey
  var dono = 'http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '/intervencao/dono' + apikey
  var participante = 'http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '/intervencao/participante' + apikey
  const req1 = axios.get(informacao)
  const req2 = axios.get(entidades)
  const req3 = axios.get(dono)
  const req4 = axios.get(participante)
  axios.all([req1,req2,req3,req4])
    .then(axios.spread((...responses) =>{
        id = req.params.id
        inf = responses[0]
        ent = responses[1]
        don = responses[2]
        par = responses[3]
        res.render('single',{id: req.params.id, info: inf.data, enti: ent.data, dono:don.data, parti:par.data})
    }))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
