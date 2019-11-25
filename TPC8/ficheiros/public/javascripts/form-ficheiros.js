$(function () {
    var cont = 1
    $("#mais1").click(e=>{
        e.preventDefault()
        cont++
        var campo = $('<div></div>',{class: 'w3-container', id: 'f'+cont})
        var desc = $('<div></div>',{class: 'w3-cell-row', id: 'desc'+cont})
        var descLabel = $('<label class="w3-cell">Descrição:</label>')
        var descInput = $('<input/>',{class: 'w3-input w3-cell', type: 'text', name:"desc"})
        var ficheiro = $('<div></div>',{class: 'w3-cell-row', id: 'ficheiro'+cont})
        var ficheiroLabel = $('<label class="w3-cell">Ficheiro:</label>')
        var ficheiroInput = $('<input/>',{class: 'w3-input w3-cell', type: 'file', name:"ficheiro"})
        $("#lista").append(campo)
        $("#f" + cont).append(desc)
        $("#desc" + cont).append(descLabel,descInput)
        $("#f" + cont).append(ficheiro)
        $("#ficheiro" + cont).append(ficheiroLabel,ficheiroInput)
    })
})



function show_me (linha,f) {
	if(f.mimetype == 'image/png' || f.mimetype == 'image/jpeg')
        var ficheiro = $('<img src="/ficheiros/' + f.name + '" width="80%"/>')
    else if(f.mimetype == 'image/gif')
        var ficheiro = $('<img src="/ficheiros/' + f.name + '" alt="animated"/>')
    else if(f.mimetype == 'video/mp4' || f.mimetype == 'video/webm' )
        var ficheiro = $(' <video width="320" height="240" controls><source src="/ficheiros/' + f.name + '" type="' + f.mimetype +'"></video> ')
    else if(f.mimetype == 'application/pdf')
        var ficheiro = $('<embed src="/ficheiros/' + f.name + '" width="1100px" height="2100px" />')
    else
        var ficheiro = $('<p>' + JSON.stringify(f) + '</p>')
    $('#display').empty()
    $('#display').append(ficheiro)
    $('#display').modal()

}
