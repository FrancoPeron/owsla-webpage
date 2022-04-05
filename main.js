/* 

function toastbtn(){
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}
*/


import "./js/burger";

if(window.innerWidth<768){

    let play_img = document.getElementsByClassName("playlists__img");

    (play_img[1]).addEventListener("mouseenter", function( event ) {

        play_img[0].classList.add("playlists__img--up")
        
    }, false);

    (play_img[1]).addEventListener("mouseleave", function( event ) {

        play_img[0].classList.remove("playlists__img--up")
        
    }, false);

}

