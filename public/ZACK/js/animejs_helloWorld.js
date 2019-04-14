jQuery(document).ready(function($){

    setTimeout( function() {

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
        }, 0)
        .add({
            targets: 'svg.moon path',
            d: [
                { value: [
                  'M327.755,488.45c5.488-9.17,8.845-19.785,8.845-31.25c0-33.804-27.396-61.2-61.2-61.2 c-16.457,0-31.336,6.579-42.333,17.146C217.442,384.812,187.645,365.4,153,365.4c-50.7,0-91.8,41.1-91.8,91.8 c0,1.864,0.439,3.614,0.545,5.45C25.895,475.148,0,508.886,0,549c0,50.7,41.1,91.8,91.8,91.8h229.5c42.247,0,76.5-34.253,76.5-76.5 C397.8,524.262,366.933,491.778,327.755,488.45z M542.706,474.733c-83.468,15.392-160.12-46.574-160.12-128.152 c0-46.991,25.985-90.202,68.213-113.473c6.51-3.588,4.868-13.141-2.523-14.463c-10.37-1.841-20.893-2.778-31.431-2.778 c-94.968,0-170.945,62.742-170.945,154.802c0,5.813-0.601-5.662,0,0c7.904-2.706,20.958-5.499,29.5-5.269 c65.767,1.767,94.433,53.1,91.198,102.061c-0.189,2.869,0.337-2.851,0,0c29.235,14.039,57.902,49.373,60.473,80.19 c6.375,0.697,18.194,1.339,24.762,1.339c53.061,0,66.546-23.366,98.649-61.668C555.23,481.66,550.05,473.38,542.706,474.733 L542.706,474.733z',
                  'M327.755,488.45c5.488-9.17,8.845-19.785,8.845-31.25c0-33.804-27.396-61.2-61.2-61.2 c-16.457,0-31.336,6.579-42.333,17.146C217.442,384.812,187.645,365.4,153,365.4c-50.7,0-91.8,41.1-91.8,91.8 c0,1.864,0.439,3.614,0.545,5.45C25.895,475.148,0,508.886,0,549c0,50.7,41.1,91.8,91.8,91.8h229.5c42.247,0,76.5-34.253,76.5-76.5 C397.8,524.262,366.933,491.778,327.755,488.45z M600.534,460.317c-99.67,18.379-191.202-55.615-191.202-153.029 c0-56.113,31.03-107.712,81.454-135.5c7.774-4.284,5.813-15.692-3.013-17.27c-12.383-2.199-24.948-3.318-37.532-3.318 c-113.402,0-205.441,88.969-205.441,198.9c0,6.942,0.383,13.808,1.1,20.569c9.438-3.232,19.297-5.269,29.5-5.269 c50.624,0,91.8,41.176,91.8,91.8c0,3.433-0.201,6.856-0.603,10.261c32.024,14.717,54.956,44.513,60.473,80.19 c7.612,0.832,15.329,1.349,23.171,1.349c63.36,0,121.242-27.913,159.578-73.65C615.49,468.589,609.304,458.701,600.534,460.317 L600.534,460.317z']
                },
                { value: 'M327.755,488.45c5.488-9.17,8.845-19.785,8.845-31.25c0-33.804-27.396-61.2-61.2-61.2 c-16.457,0-31.336,6.579-42.333,17.146C217.442,384.812,187.645,365.4,153,365.4c-50.7,0-91.8,41.1-91.8,91.8 c0,1.864,0.439,3.614,0.545,5.45C25.895,475.148,0,508.886,0,549c0,50.7,41.1,91.8,91.8,91.8h229.5c42.247,0,76.5-34.253,76.5-76.5 C397.8,524.262,366.933,491.778,327.755,488.45z M542.706,474.733c-83.468,15.392-160.12-46.574-160.12-128.152 c0-46.991,25.985-90.202,68.213-113.473c6.51-3.588,4.868-13.141-2.523-14.463c-10.37-1.841-20.893-2.778-31.431-2.778 c-94.968,0-170.945,62.742-170.945,154.802c0,5.813-0.601-5.662,0,0c7.904-2.706,20.958-5.499,29.5-5.269 c65.767,1.767,94.433,53.1,91.198,102.061c-0.189,2.869,0.337-2.851,0,0c29.235,14.039,57.902,49.373,60.473,80.19 c6.375,0.697,18.194,1.339,24.762,1.339c53.061,0,66.546-23.366,98.649-61.668C555.23,481.66,550.05,473.38,542.706,474.733 L542.706,474.733z' },
            ],    
            easing: 'easeOutQuad',
            duration: 9000,
            loop: true,
            stroke: '#ff7700',
            direction: 'alternate',
            scale: 1,
            baseFrequency: 0,
        }, 0)
        .add({
            targets: 'svg.door path',
            d: [
                { value: [
                  'M596.7,579.6h-76.5V259.687c0-26.067-20.588-47.287-45.9-47.287H367.2v61.2H459v367.2h137.7c8.453,0,15.3-6.847,15.3-15.3 v-30.6C612,586.447,605.153,579.6,596.7,579.6z M298.58,152.166l-183.6,47.563c-13.626,3.529-23.18,16.208-23.18,30.763V579.6H15.3 C6.847,579.6,0,586.447,0,594.9v30.6c0,8.453,6.847,15.3,15.3,15.3h321.3V182.928C336.6,162.292,317.896,147.155,298.58,152.166z M252.45,426.6c-12.67,0-22.95-13.703-22.95-30.6c0-16.897,10.28-30.6,22.95-30.6c12.67,0,22.95,13.703,22.95,30.6 C275.4,412.896,265.12,426.6,252.45,426.6z',
                  'M596.699,579.6h-76.5V259.687c0-26.067-20.588-47.287-45.9-47.287H397.5v61.2H459v367.2h137.699 c8.453,0,15.301-6.847,15.301-15.3v-30.6C612,586.447,605.152,579.6,596.699,579.6z M328.88,175.738l-213.901,23.992 c-13.626,3.529-23.18,16.208-23.18,30.763V579.6h-76.5C6.846,579.6,0,586.447,0,594.9v30.6c0,8.453,6.847,15.3,15.3,15.3H366.9 V206.5C366.9,185.864,348.195,170.727,328.88,175.738z M282.75,426.6c-12.67,0-22.95-13.703-22.95-30.6 c0-16.897,10.28-30.6,22.95-30.6c12.67,0,22.95,13.703,22.95,30.6C305.7,412.896,295.42,426.6,282.75,426.6z']
                },
                { value: 'M596.7,579.6h-76.5V259.687c0-26.067-20.588-47.287-45.9-47.287H367.2v61.2H459v367.2h137.7c8.453,0,15.3-6.847,15.3-15.3 v-30.6C612,586.447,605.153,579.6,596.7,579.6z M298.58,152.166l-183.6,47.563c-13.626,3.529-23.18,16.208-23.18,30.763V579.6H15.3 C6.847,579.6,0,586.447,0,594.9v30.6c0,8.453,6.847,15.3,15.3,15.3h321.3V182.928C336.6,162.292,317.896,147.155,298.58,152.166z M252.45,426.6c-12.67,0-22.95-13.703-22.95-30.6c0-16.897,10.28-30.6,22.95-30.6c12.67,0,22.95,13.703,22.95,30.6 C275.4,412.896,265.12,426.6,252.45,426.6z' },
            ],    
            easing: 'easeOutQuad',
            duration: 9000,
            loop: true,
            stroke: '#ff7700',
            direction: 'alternate',
            scale: 1,
            baseFrequency: 0,
        }, 0)
        .add({
            targets: 'svg.icecream path',
            d: [
                { value: [
                  'M502.714,264.857h-1.284C513.823,156.924,436.373,59.38,328.44,46.987 c-107.934-12.393-205.477,65.057-217.871,172.99c-1.712,14.911-1.712,29.969,0,44.88h-1.284c-36.214,0-65.571,29.357-65.571,65.572 c0,36.214,29.357,65.571,65.571,65.571h393.428c36.215,0,65.572-29.357,65.572-65.571 C568.286,294.214,538.929,264.857,502.714,264.857z M266.903,720.701c9.964,21.593,35.545,31.021,57.138,21.057 c9.299-4.291,16.765-11.757,21.056-21.057l135.761-280.987H131.143L266.903,720.701z',
                  'M502.714,264.857h-1.284C513.823,156.924,436.373,111.894,328.44,99.5 C220.507,87.107,122.963,112.044,110.57,219.977c-1.712,14.911-1.712,29.969,0,44.88h-1.284c-36.214,0-65.571,59.429-65.571,95.643 c0,36.214,29.357,35.5,65.571,35.5h393.428c36.215,0,65.572,0.714,65.572-35.5C568.286,324.286,538.929,264.857,502.714,264.857z M266.902,720.701c9.965,21.593,35.546,31.021,57.139,21.057c9.299-4.291,16.765-11.757,21.056-21.057l135.761-280.987H131.143 L266.902,720.701z']
                },
                { value: 'M502.714,264.857h-1.284C513.823,156.924,436.373,59.38,328.44,46.987 c-107.934-12.393-205.477,65.057-217.871,172.99c-1.712,14.911-1.712,29.969,0,44.88h-1.284c-36.214,0-65.571,29.357-65.571,65.572 c0,36.214,29.357,65.571,65.571,65.571h393.428c36.215,0,65.572-29.357,65.572-65.571 C568.286,294.214,538.929,264.857,502.714,264.857z M266.903,720.701c9.964,21.593,35.545,31.021,57.138,21.057 c9.299-4.291,16.765-11.757,21.056-21.057l135.761-280.987H131.143L266.903,720.701z' },
            ],    
            easing: 'easeOutQuad',
            duration: 9000,
            loop: true,
            stroke: '#ff7700',
            direction: 'alternate',
            scale: 1,
            baseFrequency: 0,
        }, 0);

        document.querySelector('div.slide-playPause .fa-play-circle').onclick = tl.play;
        document.querySelector('div.slide-playPause .fa-pause-circle').onclick = tl.pause;
        // document.querySelector('div.slide-playPause i').onclick = tl.reverse;


        var polygon = anime({
            targets: 'svg.polygon g polygon.target',
            points: [
                { value: [
                  '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
                  '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
                },
                { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
                { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
                { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
              ],
              easing: 'easeOutQuad',
              duration: 6000,
              loop: true
        });



    }, 1000);

})