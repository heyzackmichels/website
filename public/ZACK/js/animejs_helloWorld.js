jQuery(document).ready(function($){

    setTimeout( function() {

        // var animation = anime({
        //     targets: 'div.svgContainer svg',
        //     translateY: [
        //         { value: 5, duration: 3000},
        //         { value: 0, duration: 3000},
        //     ],
        //     loop: true,
        //     delay: function(el, i) { return i * 1000; }
        // });

        // var animation = anime({
        //     targets: 'div.slide-thing i',
        //     translateX: [
        //         { value: -200, duration: 1000},
        //         { value: 0, duration: 1000},
        //         { value: 200, duration: 1000},
        //         { value: -200, duration: 1000},
        //         { value: 0, duration: 1000},
        //         { value: 200, duration: 1000},
        //     ],
        //     loop: true,
        //     endDelay: 2000,
        // });

        var tl = anime.timeline({
            loop: true,
        });

        tl
        .add({
            targets: 'div.svgContainer svg',
            translateY: [
                { value: 5, duration: 3000},
                { value: 0, duration: 3000},
            ],
            delay: function(el, i) { return i * 1000; }
        })
        .add({
            targets: 'div.slide-thing i',
            translateX: [
                { value: -200, duration: 1000},
                { value: 0, duration: 1000},
                { value: 200, duration: 1000},
                { value: -200, duration: 1000},
                { value: 0, duration: 1000},
                { value: 200, duration: 1000},
            ],
        }, 0);

        document.querySelector('div.slide-playPause .fa-play-circle').onclick = tl.play;
        document.querySelector('div.slide-playPause .fa-pause-circle').onclick = tl.pause;
        // document.querySelector('div.slide-playPause i').onclick = tl.reverse;


    }, 3000);

})