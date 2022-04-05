/* Artists Slider */

function nextArtist(){
    let element =  document.getElementById("artists__list");
    console.log(element.scrollLeft); //Muestra en consola la posicion del scroll
    element.scroll({left: element.scrollLeft + 900, behavior: "smooth"});/*Obtiene la posicion del scroll de la seccion y le suma el ancho de la tarjeta para ir a la siguiente*/
    if(element.scrollLeft>1200){
        element.scroll({left: 0, behavior: "smooth"});
    }
}

/* Auto and Manual Slider */

var cont = 2;
var anterior = 0
let links = document.getElementsByClassName("slider__link");
document.getElementById("radio1").checked = true;

links[0].classList.add("active");

var listen = setInterval(loop, 15000);    
function loop(){
    links[anterior].classList.remove("active");
    links[cont-1].classList.remove("active2");
    links[cont-1].classList.add("active");
    
    document.getElementById('radio' + cont).checked = true;
    anterior = cont-1
    cont++;
    if(cont > 3){
        cont = 1;
    }
}   

document.getElementById("label-radio1").addEventListener("click",  function(){ 
    links[1].classList.remove("active");
    links[2].classList.remove("active");
    links[1].classList.remove("active2");
    links[2].classList.remove("active2");
    cont = 1;
    links[cont-1].classList.add("active2");
});
document.getElementById("label-radio2").addEventListener("click",  function(){ 
    links[2].classList.remove("active");
    links[0].classList.remove("active");
    links[2].classList.remove("active2");
    links[0].classList.remove("active2");
    cont = 2;
    links[cont-1].classList.add("active2");
});
document.getElementById("label-radio3").addEventListener("click",  function(){ 
    links[0].classList.remove("active");
    links[1].classList.remove("active");
    links[0].classList.remove("active2");
    links[1].classList.remove("active2");
    cont = 3
    links[cont-1].classList.add("active2");
});
