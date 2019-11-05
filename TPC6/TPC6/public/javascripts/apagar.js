function apagaFilme(ident){
    console.log('tentar apagar:' + ident)
    axios.delete('/filmes/' + ident)
        .then(response => window.location.assign('/filmes/'))
        .catch(error => console.log(error))
}
