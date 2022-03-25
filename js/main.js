 /* ====================================================
    UTILITIES FUNCTIONS
===================================================== */
function init(e){
    document.removeEventListener('DOMContentLoaded', init, false);

    /* ====================================================
    ADD INTERACTIONS
    ===================================================== */
    //Autopo play video fix for Chrome 
    document.querySelector('div.video-frame video').play();

    //Listen for clicks on mobile nav button
    document.querySelector('nav div.nav-btn').addEventListener('click', e => {
        /* console.log('clicked on mobile nav bar'); */

        !document.querySelector('nav ul.nav').classList.contains('show') ? document.querySelector('nav ul.nav').classList.add('show') : document.querySelector('nav ul.nav').classList.remove('show');
    });

}

document.addEventListener('DOMContentLoaded', init, false);