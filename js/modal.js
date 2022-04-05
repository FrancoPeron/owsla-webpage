
function modal(CONTENT){

    var items = document.querySelectorAll(".m-btn");
    for (var i = 0; i < items.length; i++) {
    
        items[i].addEventListener("click", function(e){
            var show = reproductor.classList.contains("show");
            var target =  e.currentTarget;
            var m_id = target.getAttribute('m-id')
            var offcanvasBody = reproductor.querySelector('.content')
            offcanvasBody.innerHTML = CONTENT[m_id];
            if(!show){
            setTimeout(function(){
                    target.click();
                }, 400);
            }
        }, false);
    }
}