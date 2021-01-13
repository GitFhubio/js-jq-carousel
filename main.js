  //Partendo dal codice di ottavio
  // $('.next').click(function() {
  //   $('.images img.active').removeClass('active').next().addClass('active');
  // })
  //
  // $('.prev').click(function() {
  //   $('.images img.active').removeClass('active').prev().addClass('active');
  // })

// ma c'è il problema del limite

$('.next').click(function(){immaginesuccessiva();})
$('.prev').click(function(){immagineprecedente();})

// ma funzionava anche
// $('.next').click(immaginesuccessiva);
// $('.prev').click(immagineprecedente);

function immaginesuccessiva()
{
var immagineattuale=$('img.active');
var pallinoattuale=$('.fa-circle.active');

immagineattuale.removeClass('active');
pallinoattuale.removeClass('active');

var immaginesuccessiva=immagineattuale.next();
var pallinosuccessivo=pallinoattuale.next();

    if(immaginesuccessiva.length != 0) {
      immaginesuccessiva.addClass('active');
        pallinosuccessivo.addClass('active');
    } else {
        immaginesuccessiva = $('img:first-child');
        immaginesuccessiva.addClass('active');
        $('.fa-circle:first-child').addClass('active');
    }
}

// oppure l'if lo potevo fare cosi

// immaginesuccessiva.addClass('active');
// pallinosuccessivo.addClass('active');
//
//
//     if(immagineattuale.hasClass('last')) {
//       immagineattuale = $('img.first');
//       immagineattuale.addClass('active');
//       pallinoattuale=$('.fa-circle.first');
//       pallinoattuale.addClass('active');

      // queste ultime due righe erano evitabili perché tanto next non esiste
      // immaginesuccessiva.removeClass('active');
      // pallinosuccessivo.removeClass('active');

//     }
//
// }

function immagineprecedente()
{
var immagineattuale=$('img.active');
var pallinoattuale=$('.fa-circle.active');

immagineattuale.removeClass('active');
pallinoattuale.removeClass('active');

var immagineprecedente=immagineattuale.prev();
var pallinoprecedente=pallinoattuale.prev();

    if(immagineprecedente.length != 0) {
      immagineprecedente.addClass('active');
        pallinoprecedente.addClass('active');
    } else {
        immagineprecedente = $('img:last-child');
        immagineprecedente.addClass('active');
        $('.fa-circle:last-child').addClass('active');
    }

}

// teoricamente dovrebbero andare anche le funzioni di intervallo per lo slide naturale
// e poi poiché ho in mente di provare a fare una cosa nel weekend con keydown

// setInterval(function(){ immaginesuccessiva();}, 4000);
var clock=setInterval(function(){ immaginesuccessiva();}, 4000);

 $(document).keydown( function(event) {
     if (event.keyCode == 37) {
         immagineprecedente();
     }

     else if (event.keyCode == 39) {
         immaginesuccessiva();
     }
 });

$(document).click(function() {
    clearInterval(clock);
});
$(document).keydown(function() {
    clearInterval(clock);
});
