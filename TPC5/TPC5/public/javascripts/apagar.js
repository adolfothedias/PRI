function apagaAluno(ident){
    console.log('tentar apagar:' + ident)
    axios.delete('/alunos/' + ident)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
}

function apagaNota(idAluno,ind){
    console.log('tentar apagar nota de:' + idAluno + ' da cadeira ' +ind)
    axios.delete('/alunos/' + idAluno + '/notas/' + ind)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
}