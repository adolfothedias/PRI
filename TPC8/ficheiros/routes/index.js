var express = require('express');
var router = express.Router();
const axios = require('axios');
const path = require('path');
const lhost = require('../config/env').host
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(lhost + '/api/ficheiros')
  .then(dados =>{
    res.render('index',{lista:dados.data});
  })
  .catch(erro =>{
    res.render('error',{error:erro});
  })
});


module.exports = router;
