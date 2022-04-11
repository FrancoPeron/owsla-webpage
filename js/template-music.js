
const RELEASE = {
    1: {
        id: 1,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS001].jpg",
        artist: "Porter Robinson",
        title: "Spitfire EP"
    },
    2: {
        id: 2,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS002].jpg",
        artist: "Zedd",
        title: "Shave It"
    },
    3: {
        id: 3,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS003].jpg",
        artist: "The M Machine",
        title: "Promise Me A Rose Garden, Glow"
    },
    4: {
        id: 4,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS004].jpg",
        artist: "KOAN Sound",
        title: "Funk Blaster"
    },
    5: {
        id: 5,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS005B].jpg",
        artist: "Zedd",
        title: "The Aftershave"
    },
    6: {
        id: 6,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS006B].jpg",
        artist: "Skream",
        title: "Anticipate (feat. Sam Frank)"
    },
    7: {
        id: 7,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS007].jpg",
        artist: "Kill The Noise",
        title: "Kill Kill Kill"
    },
    8: {
        id: 8,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS008].jpg",
        artist: "Zedd",
        title: "Slam The Door"
    },
    9: {
        id: 9,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS009].jpg",
        artist: "Nick Thayer",
        title: "Like Boom"
    },
    10: {
        id: 10,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS010].jpg",
        artist: "Dillon Francis",
        title: "Something, Something, Awesome EP"
    },
    11: {
        id: 11,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS011].jpg",
        artist: "Kill The Noise & Datsik",
        title: "Lightspeed"
    },
    12: {
        id: 12,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS012].jpg",
        artist: "OWSLA",
        title: "OWSLA Presents Free Treats Vol. II"
    },
    13: {
        id: 13,
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lMHz7-UhSpa3R3hKp9uSJb28JFy_bu1ww&feature=share",
        img: "../assets/image/releases/[OWS013].jpg",
        artist: "Zedd",
        title: "Shotgun"
    },
}

function musicItem(val){
    const item =  
        `
            <a href=${val.link}" target="_blank" class="release">
                <img class="release__img shadow" src=" ${val.img} " alt=" ${val.artist} - ${ val.title }">
                <div class="release__info">
                    <h2 class="release__title"> ${val.title}</h2>
                    <h3 class="release__artist"> ${val.artist}</h3>.
                </div>
            </a>
        `
        return item
}

f_for_reverse(RELEASE,musicItem)