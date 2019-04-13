jQuery(document).ready(function($){

    // anime({
    //     targets: 'div.slide-thing i',
    //     translateX: [
    //         { value: 200, duration: 3000},
    //         { value: 0, duration: 1000},
    //         { value: -200, duration: 3000},
    //         { value: 0, duration: 1000}
    //     ],
    //     loop: true,
    // });

    var animation = anime({
        targets: 'div.slide-thing i',
        translateX: [
            { value: 440, duration: 3000},
            { value: 0, duration: 3000}
        ],
        loop: true,
        // autoplay: false
    });
    
    document.querySelector('div.slide-playPause .fa-play-circle').onclick = animation.play;
    document.querySelector('div.slide-playPause .fa-pause-circle').onclick = animation.pause;

})