var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')
var myBD = __dirname + "/../data/alunos.json"

router.get('/', function(req, res, next) {
  jsonfile.readFile(myBD, (erro, alunos) => {
    if(!erro){
        res.render('index',{lista : alunos})
    } else {
        res.render('error', {error:erro})
    }
  })
});

router.get('/:idAluno', function(req,res) {
  var id = req.params.idAluno
  jsonfile.readFile(myBD, (erro,alunos) => {
    if(!erro){
      var index = alunos.findIndex(c => c.identificador == id)
      if(index > -1){
        var al = alunos[index]
        res.render('single',{aluno : al})
      } else {
        console.log('Erro: Aluno não encontrado')
      }
    } else {
      console.log('Erro: Não existe esse aluno')
      res.render('index',{lista: alunos})
    }
  })
})


router.post('/' , function (req,res) {
  var registo = req.body
  registo['id'] = nanoid()
  jsonfile.readFile(myBD, (erro,alunos)=> {
    if(!erro){
      registo.notas = []
      alunos.push(registo)
      jsonfile.writeFile(myBD,alunos,erro =>{
        if(erro) console.log(erro)
        else console.log('Sucesso na gravação do registo')
      })
    }
    res.render('index',{lista : alunos})
  })
});

router.post('/:idAluno/notas' , function (req,res) {
  var id = req.params.idAluno
  var registo = req.body
  jsonfile.readFile(myBD, (erro,alunos)=> {
    if(!erro){
      var index = alunos.findIndex(c => c.identificador == id)
      if(index > -1){
        var aluno = alunos[index]
        alunos.splice(index,1)
        aluno.notas.push(registo)
        alunos.push(aluno)
        jsonfile.writeFile(myBD, alunos, erro =>{
          if(erro) console.log(erro)
          else console.log('BD atualizada com sucesso')
          })
      } else {
        console.log('Erro: Aluno não encontrado')
      }
    }
    res.render('index',{lista : alunos})
  })
});



router.delete('/:idAluno', function (req,res){
  var id = req.params.idAluno
  jsonfile.readFile(myBD, (erro,alunos) => {
  if(!erro){
  var index = alunos.findIndex(c => c.identificador == id)
  if(index > -1){
    alunos.splice(index,1)
    jsonfile.writeFile(myBD, alunos, erro =>{
      if(erro) console.log(erro)
      else console.log('BD atualizada com sucesso')
      })
   } else {
    console.log('Erro: Elemento n encontrado')
      }
    }
    res.render('index',{lista : alunos})
  })
});

module.exports = router;

router.delete('/:idAluno/notas/:indicador' , function (req,res) {
  var ida = req.params.idAluno
  var ind = req.params.indicador
  jsonfile.readFile(myBD, (erro,alunos) => {
    if(!erro){
      var index = alunos.findIndex(c => c.identificador == ida)
      if(index > -1){
        var aluno = alunos[index]
        alunos.splice(index,1)
        var indexnota = aluno.notas.findIndex(c => c.indicador == ind)
        aluno.notas.splice(indexnota,1)
        alunos.push(aluno)
        jsonfile.writeFile(myBD, alunos, erro =>{
          if(erro) console.log(erro)
          else console.log('BD atualizada com sucesso')
          })
      } else {
          console.log('Erro: Elemento n encontrado')
        }
      }
      res.render('index',{lista : alunos})
    })
});