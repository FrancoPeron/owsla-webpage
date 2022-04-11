const PLAYLIST = {
    1: 'https://open.spotify.com/embed/playlist/53PL6ta1G0KUC1wHiX7ABx?utm_source=generator&theme=0',
    2: 'https://open.spotify.com/embed/playlist/6pqF6xEMaLBXHdUPKlXZwd?utm_source=generator',
    3: 'https://open.spotify.com/embed/playlist/3GGnJRZnzkiie2izVuUxN0?utm_source=generator'
}
print(PLAYLIST);



if(window.innerWidth<768){

    let play_img = document.getElementsByClassName("playlists__img");

    (play_img[1]).addEventListener("mouseenter", function( event ) {

        play_img[0].classList.add("playlists__img--up")
        
    }, false);

    (play_img[1]).addEventListener("mouseleave", function( event ) {

        play_img[0].classList.remove("playlists__img--up")
        
    }, false);

}