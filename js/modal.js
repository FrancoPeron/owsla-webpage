
function print(DATA){

    var items = document.querySelectorAll(".m-btn");
    console.log(items)
    for (var i = 0; i < items.length; i++) {
    
        items[i].addEventListener("click", function(e){
            var target =  e.currentTarget;
            var m_id = target.getAttribute('m-id')
            var body = document.querySelector('.target')
            body.src = DATA[m_id];
            
        }, false);
    }
}


function offcanvas(DATA){

    var items = document.querySelectorAll(".m-btn");
    for (var i = 0; i < items.length; i++) {
    
        items[i].addEventListener("click", function(e){
            var show = reproductor.classList.contains("show");
            var target =  e.currentTarget;
            var m_id = target.getAttribute('m-id')
            var offcanvasBody = reproductor.querySelector('.content')
            offcanvasBody.innerHTML = DATA[m_id];
            if(!show){
            setTimeout(function(){
                    target.click();
                }, 400);
            }
        }, false);
    }
}


function modal(DATA){

    var btn = document.querySelectorAll('[modal="btn"]');
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function(e){
            var m_id = e.currentTarget.getAttribute('m-id')
            var modalBody = document.querySelector('[modal="target"]')
            modalBody.innerHTML = DATA[m_id].iframe;

        }, false);
    }
}