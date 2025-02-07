$(document).ready(function () {
    var animationExecuted = false; 
    var clickCount = 0;
    var btnPressed = false;
   

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
            $('.card').html('<div class="text">Amor de mi vida y de mi corazon <br>Lo mejor tarda por llegar y sabes lo mucho que te amo</div>');
            $('.text').css({
                'margin-left': '-70px' ,
                'font-size': '22px',
                'padding': '5px 20px',
            });
        }
        else if (clickCount === 4) {
            $('.card').html('<div class="text">Contigo todos los dias son muy especiales<br> Sabes lo muy feliz que me haces y siempre te lo digo.</div>');
            $('.text').css({
                'margin-left': '-70px' ,
                'font-size': '22px',
                'padding': '5px 20px',
            });
        }
        else if (clickCount === 5) {
            $('.card').html('<div class="text">Y aún más especial será si me das tu respuesta a esto…</div>');
            $('.text').css({
                'margin-left': '-70px' ,
                'font-size': '22px',
                'padding': '5px 20px',
            });
        }
        else if (clickCount === 6) {
            $('.card').html('<div class="text">¿Te gustaría compartir este San Valentín conmigo?</div>');
            $('.text').css({
                'margin-left': '-70px',
                'font-size': '22px',
                'padding': '5px 20px',
            });
            $('.card').append('<div class="btn-container"><button class="btn-red">Sí</button><button class="btn-red">Si</button></div>');
            $('.btn-red').eq(1).click(function() {
                btnPressed = true;
                $('.card').html('<div class="text">Estás destinada a estar a mi lado, sorry <br> Nos vemos el 11 y 14, amor de mi vida</div>');
                
                $('.text').css({
                    'margin-left': '-70px',
                    'font-size': '22px',
                    'padding': '5px 20px',
                });
            });
        
            $('.btn-red').eq(1).click(function() {
                btnPressed = true;
                $('.card').html('<div class="text">Estás destinada a estar a mi lado, sorry <br> Nos vemos el 11 y 14, amor de mi vida</div>');
                
                $('.text').css({
                    'margin-left': '-70px',
                    'font-size': '22px',
                    'padding': '5px 20px',
                });
            });
        }
        else if (clickCount >= 8 && btnPressed) {

            $('.card').html('<img src="https://i.postimg.cc/4d7GKHJH/IMG-4409.jpg" alt="Imagen" class="card-image">');
            $('.text').css({
                'margin-left': '-70px',
                'font-size': '22px',
                'padding': '5px 15px',
            });
        }
    });
    
});