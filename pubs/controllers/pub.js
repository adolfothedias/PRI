var Pub = require('../models/pub')
var {ObjectId} = require('mongodb');

const Pubs = module.exports


// out module.exports.listar = () ...
Pubs.listar = () => {
    return Pub
        .find({},{_id:0,id:1,title:1,year:1,type:1})
        .exec()
}

Pubs.consultar = id => {
    return Pub
        .findOne({id : id})
        .exec()
}

Pubs.consultarTypeYear = (type,year) => {
    return Pub
        .find({type:type,year:year})
        .exec()
}

Pubs.consultarType = type => {
    return Pub
        .find({type:type})
        .exec()
}

Pubs.consultarAutor = autor => {
    return Pub
        .find({authors: autor},{_id:0,id:1,title:1,year:1,type:1})
        .exec()
}

Pubs.consultarTypes = () => {
    return Pub
        .distinct("type")
        .exec()
}

Pubs.consultarAutores = () => {
    return Pub
        .aggregate([{$unwind:"$authors"},
        {$project:{name: "$authors"}}, 
        {$group:{_id:"$name",name:{$first:"$name"}}},
        {$sort:{_id:1}}
        ])
    .exec()
}