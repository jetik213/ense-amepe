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