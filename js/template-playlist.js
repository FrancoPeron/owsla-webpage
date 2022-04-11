const PLAYLIST = {
    1: '<iframe class="playlists__iframe" src="https://open.spotify.com/embed/playlist/3GGnJRZnzkiie2izVuUxN0?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
    2: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FCreateRadio%2Fowsla-radio-2-beats-1%2F" frameborder="0" ></iframe>',
    3: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fskrillex-owsla-radio-3-beats-1%2F" frameborder="0" ></iframe>'
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