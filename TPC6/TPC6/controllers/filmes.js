var Filme = require('../models/filmes')
var {ObjectId} = require('mongodb');

const Filmes = module.exports


// out module.exports.listar = () ...
Filmes.listar = () => {
    return Filme
        .find()
        .exec()
}

Filmes.consultar = id => {
    return Filme
        .findOne({_id : id})
        .exec()
}

Filmes.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

Filmes.inserir = filme =>{
    filme._id = ObjectId()
    var cast = filme.cast.filter(function (elem) {
        return elem != '';
    });
    filme.cast = cast

    var genres= filme.genres.filter(function (elem) {
        return elem != '';
    })
    filme.genres = genres
    var novo = new Filme(filme)
    return novo.save()
}

Filmes.eliminar = id => {
    return Filme.
        deleteOne({_id : id}).
        exec()
}