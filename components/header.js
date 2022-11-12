
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
                <svg class="header__line width="203" height="2" viewBox="0 0 203 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.73206 1L201.732 0.999983" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>

                <a class="header__logo" href="/index.html"> <img alt="OWSLA Logo"></a>

                <svg class="header__line width="203" height="2" viewBox="0 0 203 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.73206 1L201.732 0.999983" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>

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


