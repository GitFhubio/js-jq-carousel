  //Partendo dal codice di ottavio
  // $('.next').click(function() {
  //   $('.images img.active').removeClass('active').next().addClass('active');
  // })
  //
  // $('.prev').click(function() {
  //   $('.images img.active').removeClass('active').prev().addClass('active');
  // })

// o meglio

$('.next').click(immaginesuccessiva);
// $('.prev').click(immagineprecedente);

function immaginesuccessiva()
{
var immagineattuale=$('img.active');
var pallinoattuale=$('fa-circle.active');

immagineattuale.removeClass('active');
pallinoattuale.removeClass('active');

var immaginesuccessiva=immagineattuale.next('img');
var pallinosuccessivo=pallinoattuale.next('img');

    if(immaginesuccessiva.length != 0) {
      immaginesuccessiva.addClass('active');
        pallinosuccessivo.addClass('active');
    } else {
        immaginesuccessiva = $('img:first-child');
        immaginesuccessiva.addClass('active');
        $('.fa-circle:first-child').addClass('active');
    }


// oppure l'if lo potevo fare cosi

    // if(immagineattuale.hasClass('last')) {
    //   immagineattuale = $('img:first-child');
    //   immagineattuale.addClass('active');
    //
    // } else {
    //   immaginesuccessiva.addClass('active');
    //       pallinosuccessivo.addClass('active');
    // }

}
