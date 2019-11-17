var Obra = require('../models/obras')
var {ObjectId} = require('mongodb');

const Obras = module.exports


// out module.exports.listar = () ...
Obras.listar = () => {
    return Obra
        .find()
        .exec()
}

Obras.filtrarAno = ano => {
    return Obra
        .find({anoCriacao : ano})
        .exec()
}

Obras.filtrarPeriodo = p => {
    return Obra
        .find({periodo : p})
        .exec()
}

Obras.filtrarCompositor = c => {
    return Obra
        .find({compositor : c})
        .exec()
}

Obras.listarCompositor = () => {
    return Obra
        .distinct("compositor")
        .exec()
}

Obras.listarObrasCompositor = n => {
    return Obra
        .aggregate([
            { $match: { compositor: n } },
            { $group: {  _id: "$id" , obra: { $push:  { nome : "$nome"}}}},
          ])
        .exec()
}
