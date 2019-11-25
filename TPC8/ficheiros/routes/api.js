var express = require('express');
var router = express.Router();
const fs = require('fs');
var Ficheiros = require('../controllers/ficheiros')
var Ficheiro = require('../models/ficheiro')

var multer = require('multer')
var upload = multer({dest:'public/ficheiros/'})


/* GET users listing. */
router.get('/ficheiros', function(req, res, next) {
  Ficheiros.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/ficheiros', upload.array('ficheiro'), function (req,res){
  
  var fileKeys = Object.keys(req.files).length;

  for (i=0;i<fileKeys;i++){
  //single
  var oldPath = __dirname + '/../' + req.files[i].path
  var newPath = __dirname + '/../public/ficheiros/' + req.files[i].originalname

  fs.rename(oldPath,newPath, function (err){
    if (err) throw err
  })

  var data = new Date()

  var novoFicheiro = new Ficheiro(
    {
      data: data.toISOString(),
      desc : req.body.desc[i],
      name: req.files[i].originalname,
      path: newPath,
      mimetype: req.files[i].mimetype,
      size: req.files[i].size      
    }
  )
  
  novoFicheiro.save(function (err,ficheiro){
    if(err) console.log('Erro')
    else
    console.log('Correu bem')
  });
  }
  res.redirect('/')

})

module.exports = router;
