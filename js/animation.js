var video = document.getElementById("background-video");

var btn = document.getElementById("btnVideo");



function playAndPause() {

    if (video.paused) {

        video.play();

        btn.innerHTML = "Pause II";

    } else {

        video.pause();

        btn.innerHTML = "Play ▶";

    }

}



(function() {

    let sidebarOpened = false;
    let verif = false;
    let menu = document.querySelector('.menu-items_phone');
    let button = document.querySelector('.hamburger_menu');
    button.addEventListener('click', function(e){
        e.stopPropagation();
        e.preventDefault();
        document.body.classList.add('has-sidebar');
        sidebarOpened = true;
        menu.style.display = 'block';
    })

    document.body.addEventListener('click', function () {
        if (sidebarOpened) {
            document.body.classList.remove('has-sidebar');
            verif = true;
        }
        
        // if (sidebarOpened = false) {
        //     menu.style.display = 'none';
        // }
    })
}) ()