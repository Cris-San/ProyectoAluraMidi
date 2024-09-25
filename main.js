function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');


//Optimización Código Bucle For

for ( let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function(){
        playSonido(idAudio);
    };

    //Cuando se presione ENTER o SPACEBAR

    //Aplica fondo rojo - Activa la clase
    tecla.onkeydown = function(evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {//||operador OR
            tecla.classList.add('activa');//Si alguna de las condiciones es valida activa la clase.
        }

    }

    //Quita fondo rojo Desactiva la clase
    tecla.onkeyup = function() {
        tecla.classList.remove('activa');
    }

}