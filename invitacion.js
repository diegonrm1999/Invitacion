$(document).ready(function () {
    var animationExecuted = false; 
    var clickCount = 0;
    var isNoPressed = false;
    var isYesPressed = false;

    $('.container').click(function () {
        clickCount++; 
        if (clickCount === 1) {
            // Animación de subida y aumento de tamaño
            $('.card').stop().animate({
                top: '-220px',
                scale: '1.1'
            }, 'slow', function () {
                animationExecuted = true;
                // Ocultar los corazones
                $('.hearts').fadeOut();
    
                // Ahora, después de que se complete la animación, se reinicia la carta
                setTimeout(function() {
                    $('.card').stop().animate({
                        top: '5px',  
                        scale: '1'  
                    }, 'slow').css('z-index', '10');
                }, 200); // Tiempo de espera para que la carta vuelva a su lugar después de 1 segundo
            });
        }

        if (clickCount === 2) {
            $('.card').css({
                'transform': 'scale(1.5)',  
                'transition': 'transform 0.5s ease'
            });
        }
        else if (clickCount === 3) {
            $('.card').html('<div class="text">Amor de mi vida y de mi corazon! <br>Lo mejor tarda por llegar y sabes lo mucho que te amo</div>');
            $('.text').css({
                'margin-left': '-70px' ,
                'font-size': '18px',
                'padding': '5px 20px',
            });
        }
        else if (clickCount === 4) {
            $('.card').html('<div class="text">Contigo todos los dias son muy especiales ♡ <br> Sabes lo muy feliz que me haces y siempre te lo digo.</div>');
            $('.text').css({
                'margin-left': '-70px' ,
                'font-size': '18px',
                'padding': '5px 20px',
            });
        }
        else if (clickCount === 5) {
            $('.card').html('<div class="text">Y aún más especial será si me das tu respuesta a esto…</div>');
            $('.text').css({
                'margin-left': '-70px' ,
                'font-size': '18px',
                'padding': '5px 20px',
            });
        }
        else if (clickCount === 6) {
            $('.card').html('<div class="text">¿Te gustaría compartir este San Valentín conmigo?</div>');
            $('.text').css({
                'margin-left': '-70px',
                'font-size': '18px',
                'padding': '5px 20px',
            });
            $('.card').append('<div class="btn-container"><button class="btn-red">Sí</button><button class="btn-red">No</button></div>');
            $('.btn-red').eq(0).click(function() {
                isYesPressed = true;
                $('.card').html('<div class="text">Te amo mucho mi amor, nos vemos el 14 y el 15 en el templo. Y dale U!</div>');
                $('.text').css({
                    'margin-left': '-70px',
                    'font-size': '18px',
                    'padding': '5px 20px',
                });
            });
        
            $('.btn-red').eq(1).click(function() {
                isNoPressed = true;
                $('.card').html('<img src="https://i.postimg.cc/65jcWBWg/AA21-F5-FA-C20-F-4779-8376-956-B4-A34-CA95.jpg" alt="Imagen" class="card-image">');
                $('.card-image').css({
                    'width': '70px',  
                    'max-width': '80%', 
                });
            });
        }
        else if (clickCount >= 8 && isYesPressed) {
            $('.card').html('<img src="https://i.postimg.cc/4d7GKHJH/IMG-4409.jpg" alt="Imagen" class="card-image">');
            $('.text').css({
                'margin-left': '-70px',
                'font-size': '18px',
                'padding': '5px 15px',
            });
        }
        else if (clickCount >= 8 && isNoPressed) {
            $('.card').html('<div class="text">No hay un no como respuesta asi que igual es un si, nos vemos el 14 mi vida ♡ <br> Te amo!</div>');
            $('.text').css({
                'margin-left': '-70px',
                'font-size': '18px',
                'padding': '5px 15px',
            });
        }
    });
    
});