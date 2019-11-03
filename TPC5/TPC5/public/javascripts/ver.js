function verAluno(ident){
    console.log('tentar ver:' + ident)
    axios.get('/alunos/' + ident)
        .then(response => window.location.assign('/alunos/' + ident))
        .catch(error => console.log(error))
}
