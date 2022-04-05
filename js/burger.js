
document.getElementById('burger').addEventListener("click",  function(){ 

    if(document.getElementById('burger').checked){
        document.body.style.overflow ="hidden";
    }else{
        document.body.style.overflow ="auto";
    }
});

window.addEventListener("resize", () => {
    if(window.innerWidth < 1024){
        document.body.style.overflow ="auto";
    }
});
