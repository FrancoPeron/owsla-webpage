
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log(`${this.getAttribute("id")} ADDED TO THE DOM`);
        /* ============================================================*/

        this.innerHTML =  
        /*html*/`
        <header class="header">
            <input type="checkbox" name="burger-btn" id="burger">
            <div class="header__logo-burger">
                <a class="header__logo" href="index.html"> <img alt="OWSLA Logo"></a>
                <label for="burger" class="burger-btn"><div class="burger"></div></label>
            </div>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a class="nav__link" href="/views/music.html">Music</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/views/artists.html">Artists</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/views/videos.html">Videos</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/views/radio.html">Radio</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/views/merch.html">Merch</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/views/about.html">About</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/views/contact.html">Contact</a>
                    </li>
                </ul>
            </nav>

        </header>
        `
    }

    disconnectedCallback() {
        console.info('Todo REMOVED TO THE DOM');
    }

    /*====================================================================================================================================*/
}
window.customElements.define('header-comp', Header);


