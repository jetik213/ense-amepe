// ====================================================================
//    Método para cambiar las imágenes del elemento con id - banner
// ====================================================================
var n=0;
//Definir arrays
var arr_lugar = ['students_01','students_02','students_03','students_04']
function CambiarImagen(){
    var estudiantes = document.getElementById('estudiantes');
    estudiantes.src = "../assets/images/estudiantes/" + arr_lugar[n]+".webp";
    n++;
    if (n >= arr_lugar.length) n = 0;

    //cambiamos la imagen cada 1.5s
    window.setTimeout('CambiarImagen()',2000);
}





// =====================================
//           Resaltar - Texto  
// =====================================
function MostrarTexto(tipo){
    var titulo = tipo.children[0] ; //0 corresponde al titulo
    var texto = tipo.children[1];   //1 corresponde al texto
    titulo.style.textDecoration = "underline";
    titulo.style.color = "#476D70";
    texto.style.color = "#5F9296";
}

function OcultarTexto(tipo){
    var titulo = tipo.children[0];
    var texto = tipo.children[1];

    titulo.style.textDecoration = "none";
    titulo.style.color = "#59606D";
    texto.style.color = "#59606D";
}





// =====================================
//           Métodos Estandar 
// =====================================
function Animar1(red_social){
    red_social.style.opacity = "0.6";
    red_social.style.transform = "scaleX(-1)";
    red_social.style.transition = "all 0.5s ease";
}
function Animar2(red_social){
    red_social.style.opacity = "1";
    red_social.style.transform = "scaleX(1)";
    red_social.style.transition = "all 0.5s ease";
}






// =========================================
//          Matriz para Abrir Sitios
// =========================================
/* function AbrirSitio_Otros(i){
    var arrURL = ["es.coursera.org", "www.edx.org/es", "aprende.org"];

    var url = "https://" + arrURL[i] ;

    window.open(url);
} */






// =========================================
//           Cambiar Imagen Curso
// =========================================
function Cambiar1(prod) {
    prod.childNodes[0].style.transform = "scale(0.8, 0.8)";
    prod.childNodes[0].style.transition = "all 0.5s ease";
}
function Cambiar2(prod) {
    prod.childNodes[0].style.transform = "scale(1, 1)";
    prod.childNodes[0].style.transition = "all 0.5s ease";
}






// =========================================
//           Cambiar Imagen Redes
// =========================================
function AnimarRedSoc1(red_social){
    red_social.style.opacity = "0.6";
    red_social.style.transform = "scaleX(-1)";
    red_social.style.transition = "all 0.5s ease";
}
function  AnimarRedSoc2(red_social){
    red_social.style.opacity = "1";
    red_social.style.transform = "scaleX(1)";
    red_social.style.transition = "all 0.5s ease";
}






// =====================================================================
//       Método anónimo para la ejecución de los anteriores métodos
// =====================================================================
window.onload = function(){
    //animacion de carga
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity='0';


    //banner.  cambiar imagen
    CambiarImagen();

    //otros links. obtenemos toda la coleccion "otros"
    var arr_otros = document.getElementsByClassName("otros");
    for (let x=0; x < arr_otros.length; x++){
        //iconos
        arr_otros[x].onmouseover = function(){Animar1(this)};
        arr_otros[x].onmouseout = function(){Animar2(this)};
        //arr_otros[x].onclick = function(){AbrirSitio_Otros(x)};
    }

    //otros_texto
    var arr_otros_texto = document.getElementsByClassName("welcome-text-article");
    for (let x=0; x < arr_otros_texto.length; x++){
        arr_otros_texto[x].onmouseover = function(){MostrarTexto(this)};
        arr_otros_texto[x].onmouseout = function(){OcultarTexto(this)};
    }

    //Imagen Curso
    var arr_curso = document.getElementsByClassName("course-img");
    for (let x = 0; x < arr_curso.length; x++){
        arr_curso[x].onmouseover = function() {Cambiar1(this);}
        arr_curso[x].onmouseout = function() {Cambiar2(this);}
    }

    //Imagen Redes
    var arr_red_soc = document.getElementsByClassName("redes_uni");
    for (let x = 0; x < arr_red_soc.length; x++){
        arr_red_soc[x].onmouseover = function() {AnimarRedSoc1(this);}
        arr_red_soc[x].onmouseout = function() {AnimarRedSoc2(this);}
    }



    
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

// =====================================================================
//       Método anónimo window EventListener
// =====================================================================

window.addEventListener('scroll', function(){

    var beneficios = document.getElementsByClassName('beneficios')[0];

    var img1 = document.getElementsByClassName('image-welcome1')[0];
    var img2 = document.getElementsByClassName('image-welcome2')[0];

    var altura = window.innerHeight/1.3; //Capturamos altura de la ventana (para la tercera parte de la ventana lo dividimos entre 1.3)

   var distancia = beneficios.getBoundingClientRect().top; //distancia de la sección hacia la parte de arriba de la ventana

   var disImg1 = img1.getBoundingClientRect().top;

   beneficios.classList.add('transform_up');
   if(distancia <= altura){
       beneficios.classList.add('aparece');
   } else{
    beneficios.classList.remove('aparece');
   }

    img1.classList.add('transform_down');
    img2.classList.add('transform_right');
   if(disImg1 <= altura){
    img1.classList.add('scroll');
    img2.classList.add('scroll');
   } else{
        img1.classList.remove('scroll');
        img2.classList.remove('scroll');
   }



})