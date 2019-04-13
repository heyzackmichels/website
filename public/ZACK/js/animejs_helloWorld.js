jQuery(document).ready(function($){

    setTimeout( function() {
            anime({
                targets: 'div.svgContainer svg',
                translateY: [
                    { value: 5, duration: 3000},
                    { value: 0, duration: 3000},
                ],
                loop: true,
                delay: function(el, i) { return i * 1000; }
            });
        }, 3000);


    // var animation = anime({
    //     targets: 'div.slide-thing i',
    //     translateX: [
    //         { value: 440, duration: 3000},
    //         { value: 0, duration: 3000}
    //     ],
    //     loop: true,
    // });
    // document.querySelector('div.slide-playPause .fa-play-circle').onclick = animation.play;
    // document.querySelector('div.slide-playPause .fa-pause-circle').onclick = animation.pause;

})