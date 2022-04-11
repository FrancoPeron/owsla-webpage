const EPISODES = {
    1: {
        id: 1,
        img: "../assets/image/owslaradio/1.webp",
        name: "Introducing OWSLA Radio",
        desc: "Skrillex chats to tons of great guests."
    },
    2: {
        id: 2,
        img: "../assets/image/owslaradio/2.webp",
        name: "Malibu Mansion",
        desc: "Bass and EDM rebels chop it up."
    },
    3: {
        id: 3,
        img: "../assets/image/owslaradio/3.webp",
        name: "Jack Ü 1 Year Anniversary",
        desc: "Here with Kai, Carmada, Diplo, and more."
    },
    4: {
        id: 4,
        img: "../assets/image/owslaradio/4.webp",
        name: "Miami Yacht Party",
        desc: "Sail with the likes of Tchami and Aazar."
    },
    5: {
        id: 5,
        img: "../assets/image/owslaradio/5.webp",
        name: "Brazil Rooftop Helipad",
        desc: "An epic broadcast from São Paulo."
    },
    6: {
        id: 6,
        img: "../assets/image/owslaradio/6.webp",
        name: "New Jersey's Finest",
        desc: "Sonny hosts the crew in a Brooklyn loft."
    },
    7: {
        id: 7,
        img: "../assets/image/owslaradio/7.webp",
        name: "Coachella House",
        desc: "Festival fun at the after party."
    },
    8: {
        id: 8,
        img: "../assets/image/owslaradio/8.webp",
        name: "NEST HQ Barbecue",
        desc: "Light up the grill and blast the tunes."
    },
    9: {
        id: 9,
        img: "../assets/image/owslaradio/9.webp",
        name: "FORM Arcosanti",
        desc: "A live mix from deep in the desert."
    },
    10: {
        id: 10,
        img: "../assets/image/owslaradio/10.webp",
        name: "Movement Detroit",
        desc: "Guest DJ Mija shares her festival picks."
    },
    11: {
        id: 11,
        img: "../assets/image/owslaradio/11.webp",
        name: "LA Free-for-all",
        desc: "Skrillex brings the party back home."
    },
    12: {
        id: 12,
        img: "../assets/image/owslaradio/12.webp",
        name: "LA House Party",
        desc: "Skrillex spins a party in LA."
    },
    13: {
        id: 13,
        img: "../assets/image/owslaradio/13.webp",
        name: "Slushii Guest Mix",
        desc: "A two-hour mix from the anonymous DJ."
    },
    14: {
        id: 14,
        img: "../assets/image/owslaradio/14.webp",
        name: "OWSLA Pop-Up",
        desc: "DJ sets and new tracks from the LA crew."
    },
    15: {
        id: 15,
        img: "../assets/image/owslaradio/15.webp",
        name: "Montreal Afterparty",
        desc: "Feat. Skrillex, Wiwek, GTA, and more."
    },
    16: {
        id: 16,
        img: "../assets/image/owslaradio/16.webp",
        name: "Getter, Mija, and Blaise",
        desc: "Visit OWSLA's LA pop-up."
    },
    17: {
        id: 17,
        img: "../assets/image/owslaradio/17.webp",
        name: "Half & Half",
        desc: "At OWSLA's pop-up with Aryay, Softest Hard, and Getter."
    },
    18: {
        id: 18,
        img: "../assets/image/owslaradio/18.webp",
        name: "Five-Year Anniversary",
        desc: "Skrillex plays a mix of OWSLA releases."
    },
    19: {
        id: 19,
        img: "../assets/image/owslaradio/19.webp",
        name: "NOISIA Guest Mix",
        desc: "The Dutch electronic trio showcase tracks from their new LP."
    },
    20: {
        id: 20,
        img: "../assets/image/owslaradio/20.webp",
        name: "Amsterdam",
        desc: "Head to Amsterdam with Mija, Chris Lake, and the OWSLA crew."
    },
}
function radioItem(val){
    const item =  
        `
            <button class="main-radio__item m-btn" data-bs-toggle="offcanvas" data-bs-target="#reproductor" m-id="` + val.id + `">
                <img class="main-radio__img" src="` + val.img +`" alt="">
                <div class="main-radio__name">
                    <h2 class="main-radio__subtitle">` + val.name + `</h2>
                    <p class="main-radio__description">` + val.desc + `</p>
                </div>
            </button>
        `
        return item
}
f_for(EPISODES,radioItem)

const PLAYERS = {
    1: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FCreateRadio%2Fowsla-radio-1-beats-1%2F" frameborder="0" ></iframe>',
    2: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FCreateRadio%2Fowsla-radio-2-beats-1%2F" frameborder="0" ></iframe>',
    3: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fskrillex-owsla-radio-3-beats-1%2F" frameborder="0" ></iframe>',
    4: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fskrillex-owsla-radio-4-beats-1%2F" frameborder="0" ></iframe>',
    5: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fskrillex-owsla-radio-5-beats-1%2F" frameborder="0" ></iframe>',
    6: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-6-beats-1%2F" frameborder="0" ></iframe>',
    7: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-7-beats-1%2F" frameborder="0" ></iframe>',
    8: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-8-beats-1%2F" frameborder="0" ></iframe>',
    9: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-9-beats-1%2F" frameborder="0" ></iframe>',
    10: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-10-beats-1%2F" frameborder="0" ></iframe>',
    11: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-11-beats-1%2F" frameborder="0" ></iframe>',
    12: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-12-beats-1%2F" frameborder="0" ></iframe>',
    13: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-13-beats-1%2F" frameborder="0" ></iframe>',
    14: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-14-beats-1%2F" frameborder="0" ></iframe>',
    15: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-15-beats-1%2F" frameborder="0" ></iframe>',
    16: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-16-beats-1%2F" frameborder="0" ></iframe>',
    17: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-17-beats-1%2F" frameborder="0" ></iframe>',
    18: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-18-beats-1%2F" frameborder="0" ></iframe>',
    19: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-19-beats-1%2F" frameborder="0" ></iframe>',
    20: '<iframe width="100%" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fowsla-radio-20-beats-1%2F" frameborder="0" ></iframe>'
}
offcanvas(PLAYERS);