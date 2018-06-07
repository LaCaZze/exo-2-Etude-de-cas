
$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:3766/liste',
        type: 'GET',

        success: function(data){
            for (var valeur in data){
            $('#presentationListe').append('<li>' + data[valeur].competence + '</li>');
            console.log(data[valeur]);
            }
        }

    });



});