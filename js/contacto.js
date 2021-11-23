$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';
        var expresion = null;

        
        // Validado Nombre ==============================
        expresion = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s+]{2,40}$/;
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre.</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else if( !expresion.test($('#names').val()) ){
            errores += '<p>El Nombre solo debe contener letras entre 10 y 50 caracteres.</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Teléfono ==============================
        expresion = /^\d{9}$/;
        if( $('#phone').val() == '' ){
            $('#phone').css("border-bottom-color", "#d1d1d1")
        } else if( !expresion.test($('#phone').val()) ){
            errores += '<p>El teléfono/celular solo debe contener números de 9 dígitos.</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        } else{
            $('#phone').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        expresion = /^([\w_.-])+\@(([\w-])+.)+(\w{2,4})+$/;
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo.</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else if(!expresion.test($('#email').val()) ){
            errores += '<p>El formato de correo ingresado es incorrecto.</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje.</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        } else{
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>¡Mensaje enviado con éxito!</h3>'+
                                        'Pronto nos contactaremos contigo...'+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});

// =====================================================================
//       Método anónimo para la ejecución de los anteriores métodos
// =====================================================================
window.onload = function(){
    //animacion de carga
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity='0';
}

// =====================================================================
//       Método anónimo window onscroll
// =====================================================================

window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behaivor: 'smooth',
    });
});