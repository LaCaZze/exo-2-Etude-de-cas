
$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3766/liste',
        type: 'GET',

        success: function (data) {
            for (var valeur in data) {
                $('#presentationListe').append('<li>' + data[valeur].competence + ' ' + etoile(data[valeur].niveau) + '</li>');
                console.log(data[valeur]);
            }
        }

    });




    //to do : ajouter les étoiles en fonction du niveau

/*     var niveau = etoile();
 */
/*     function etoile(nombre) {
       nombre x *
       return  (****)
    }
 */

function etoile(nombre){
    if(nombre == 1){
        var etoiles = '*';
    }else if(nombre == 2){
       var etoiles = '**' ;
    }else if(nombre == 3){
        var etoiles ='***';
    }else if(nombre == 4){
        var etoiles ='****';
    }else if(nombre == 5){
        var etoiles ='*****';
    }else{
        var etoiles ='******';
    }
    return etoiles
};


/* console.log(etoile(3));
 */

});