jQuery(document).ready(function($){
    anime({
        targets: 'div.slide-thing i',
        translateX: [
            { value: 200, duration: 3000},
            { value: 0, duration: 1000},
            { value: -200, duration: 3000},
            { value: 0, duration: 1000}
        ],
        loop: true,
    });
})