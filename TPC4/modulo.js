var http = require('http')
var fs = require('fs')

var myserver = http.createServer(function (req, res){
    console.log(req.method + ' ' + req.url)
    if(req.method == 'GET'){
        if(req.url == '/w3.css'){
            fs.readFile('./data/w3.css', (erro, dados)=>{
                if(!erro){
                    res.writeHead(200, {'Content-Type':'text/css'}) 
                    res.write(dados)
                }
                else {
                    res.writeHead(200, {'Content-Type':'text/plain'}) 
                    res.write('Erro na leitura do CSS...')
                }
                res.end()  
            });
        }
        else {
            var url = req.url
            var array = url.split('/')
            if(array.length == 3){
                var num = parseInt(array[2])
                if(array[1] == 'musica' && num > 0 && num <=448){
                    var nome = 'data/doc' + num + '.xml' 
                    fs.readFile(nome,(erro,data) =>{
                        if(!erro){
                            res.writeHead(200, {'Content-Type': 'text/xml'});
                            res.write(data)
                            res.end()
                        } else {
                            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                            res.write('Erro ao processar o ficheiro')
                            res.end()
                        }
                })}
                else if(array[1] != 'musica'){
                    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                    res.write('A procura de músicas tem de estar no tipo "localhost:3021/musica/(nº música)"')
                    res.end()
                } else if (array[2] == 'doc2html.xsl'){
                    fs.readFile('./data/doc2html.xsl',(erro,data) =>{
                        if(!erro){
                            res.writeHead(200, {'Content-Type': 'text/xml'});
                            res.write(data)
                            res.end()
                        } else {
                            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                            res.write('Erro ao processar o ficheiro doc2html.xsl')
                            res.end()
                        }
                    })
                } 
                else {
                    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                    res.write('Ficheiro não existe')
                    res.end()
               }
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                res.write('Inputs Errados')
                res.end()
            }
        }
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.write('Tipo de Pedido Não Sportado')
        res.end()
    }
})

myserver.listen(3021)

console.log('Servidor à escuta na porta 3021...')


