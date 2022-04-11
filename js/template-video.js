  
    const VIDEOS = {
        1: {
            id:1,
            iframe: '<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x4bn3y9" width="100%" height="100%" allowfullscreen > </iframe>',
            img: "../assets/image/videos/Mija & Vindata - Better (Official Video).jpg",
            name: "Mija & Vindata - Better (Official Video)",
        },
        2: {
            id:2,
            iframe: '<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x4nlw1w" width="100%" height="100%" allowfullscreen > </iframe> ',
            img: "../assets/image/videos/video002.jpg",
            name: "Skrillex & Rick Ross - Purple Lamborghini (Official Video)",
        },
        3: {
            id:3,
            iframe: '<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x89ta9q" width="100%" height="100%" allowfullscreen > </iframe>',
            img: "../assets/image/videos/video003.jpg",
            name: "DJ Sliink - Run Ricky Run x Higher (Official Video)",
        },
       /*  4: {
            id:4,
            iframe: "",
            img: "../assets/image/videos/video004.jpg",
            name: "",
        },
        5: {
            id:5,
            iframe: "",
            img: "../assets/image/videos/video005.jpg",
            name: "",
        },
        6: {
            id:6,
            iframe: "",
            img: "../assets/image/videos/video006.jpg",
            name: "",
        },
        7: {
            id:7,
            iframe: "",
            img: "../assets/image/videos/video007.jpg",
            name: "",
        },
        8: {
            id:8,
            iframe: "",
            img: "../assets/image/videos/video008.jpg",
            name: "",
        },
        9: {
            id:9,
            iframe: "",
            img: "../assets/image/videos/video009.jpg",
            name: "",
        },
        10: {
            id:10,
            iframe: "",
            img: "../assets/image/videos/video010.jpg",
            name: "",
        } */
    }
    function videoItem(val){
        const item =  
            `   
            <div class="video-item" modal="btn" m-id="` + val.id + `" data-bs-toggle="modal" data-bs-target="#videoplayer">
                <div class="video-item__box">
                    <img class="video-item__img" src="` + val.img + ` " alt="` + val.name + `">
                </div>
                <h2 class="video-item__title">` + val.name + `</h2>
            </div>
            
            `
        return item
    }

    f_for(VIDEOS,videoItem)

    modal(VIDEOS);
