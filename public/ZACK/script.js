
var routerApp = angular.module('routerApp', ['ui.router', 'ct.ui.router.extras', 'ngAnimate']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '/ZACK/pages/home.html',
            controller: ''
        })
        .state('about', {
            url: '/about',
            templateUrl: '/ZACK/pages/about.html',
            controller: ''
        })
        .state('connect', {
            url: '/connect',
            templateUrl: '/ZACK/pages/connect.html',
            controller: ''
        })
        .state('sourdough', {
            url: '/sourdough',
            templateUrl: '/ZACK/pages/sourdough.html',
            controller: ''
        })
        .state('svg', {
            url: '/svg',
            templateUrl: '/ZACK/pages/svg.html',
            controller: ''
        })
        .state('hotsauce', {
            url: '/hotsauce',
            templateUrl: '/ZACK/pages/hotsauce.html',
            controller: ''
        })
        .state('travis', {
            url: '/travis',
            templateUrl: '/ZACK/pages/travis.html',
            controller: ''
        });

}); //closes routerApp.config

routerApp.controller('appControl', function($scope, $window){

    $scope.aboutActivities = [
        // {
        //      title: 'Alexandria, VA'
        // },
        {
            title: 'crochet'
            ,examples: [
                 {name: 'hats'}
                ,{name: 'amigurumi'}
                ,{name: 'odds & ends'}
            ]
        }
        ,{
             title: 'fermentation'
            ,examples: [
                 {name: 'beer'}
                ,{
                    name: 'hot sauce'
                    ,state: 'hotsauce'
                }
                ,{  
                    name: 'sourdough'
                    ,state: 'sourdough'
                }
                ,{name: 'sourkraut'}
                ,{name: 'kimchi'}
            ]
        }
        ,{
            title: 'raspberry pi'
            ,examples: [
                 {name: 'arcade'}
                ,{name: 'guitar pedal'}
                ,{name: 'wireless display'}
            ]
        }
        ,{
             title: 'stringed instruments'
            ,examples: [
                 {name: 'ukulele'}
                ,{name: 'mandolin'}
                ,{name: 'guitar'}
            ]
        }
    ];

    $scope.siteParts = [
        {
            title: 'front'
            ,examples: [
                 'scss'
                ,'purecss'
                ,'fontawesome'
                ,'angular.js'
                ,'git'
            ]
        }
        ,{
            title: 'back'
            ,examples: [
                 'node'
                ,'express'
                ,'nginx'
            ]
        }
    ];

    $scope.helloWorld = [
        {
            title: 'starting sourdough'
            ,description: 'starter and bread observations.'
            ,icon: 'fas fa-ghost'
            ,state: 'sourdough'
        }
        // ,{
        //     title: '<svg>'
        //     ,description: 'svg'
        //     ,icon: 'fas fa-paint-brush'
        //     ,state: 'svg'
        // }
        // ,{
        //     title: 'hot sauce'
        //     ,description: 'hot sauce'
        //     ,icon: 'fas fa-pepper-hot'
        //     ,state: 'hotsauce'
        // }
    ];

    $scope.activeAnimation = false;
    $scope.toggleAnimation = function() {
        $scope.activeAnimation = !$scope.activeAnimation;
    };

    $scope.activeSVG = false;
    $scope.displaySVG = '';
    $scope.toggleSVG = function(name) {
        this.activeSVG = !this.activeSVG;
        $scope.displaySVG = name;
    };
    $scope.svgs = [
        {
            class: "svg-moon"
            ,viewBox: "0 151.2 612 488.977"
        }
        ,{
            class: "svg-ice-cream"
            ,viewBox: "43.714 45.685 524.572 700.045"
        }
        ,{
            class: "svg-door"
            ,viewBox: "0 151.201 612 489.599"
        }
    ];

    $scope.sourdough_loaf = {
        theComponents: [
            {
                name: 'flour'
                ,grams: 400
            }
            ,{
                name: 'water'
                ,grams: 230
            }
            ,{
                name: 'starter'
                ,grams: 160
            }
            ,{
                name: 'salt'
                ,grams: 5
            }
        ]
        ,theProcess: [
            {
                name: 'mix components'
            }
            ,{
                name: 'kneed until silky/smooth/elastic'
            }
            ,{
                name: 'proof in bowl 3 hours'
            }
            ,{
                name: 'knock down, drag edges to make sphere'
            }
            ,{
                name: 'proof in basket 3+ hours (or fridge overnight)'
            }
            ,{
                name: 'oven 450 degrees fahrenheit'
            }
            ,{
                name: 'flip into baking vessel (dutch oven)'
            }
            ,{
                name: 'score top'
            }
            ,{
                name: '25 minutes with lid'
            }
            ,{
                name: '25 minutes without lid'
            }
        ]
        ,theStarter: [
            {
                step: 'combine equal parts flour & water'
                ,description: 'fill pint jar halfway, cover with cloth & rubberband.'
                ,list: []
            }
            ,{
                step: 'let sit in warm spot 3-5 days (until active)'
                ,description: 'top of the fridge? it will start to bubble when active.'
                ,list: []
            }
            ,{
                step: 'feed twice a day for next 3 days'
                ,description: 'you want it to consistently respond to feeding. discard starter not used. later you can bake with it (perfect amount to make bread!)'
                ,list: [
                    {
                        name: 'flour'
                        ,extra: 100
                    }
                    ,{
                        name: 'water'
                        ,extra: 100
                    }
                    ,{
                        name: 'starter'
                        ,extra: 75
                    }
                ]
            }
            ,{
                step: 'ready!'
                ,description: 'start baking & feed daily OR retire to refrigerator.'
                ,list: []
            }
            ,{
                step: 'toss in fridge & feed whenever'
                ,description: 'this slows fermentation. you only need to feed before baking or every month, etc. let it reach room temperature before feeding.'
                ,list: [
                    {
                        name: 'flour'
                        ,extra: 100
                    }
                    ,{
                        name: 'water'
                        ,extra: 100
                    }
                    ,{
                        name: 'starter'
                        ,extra: 75
                    }
                ]
            }
        ]
    };

    $scope.hot_sauce = {
        theEquipment: [
            {
                name: 'mason jar'
            }
            ,{
                name: 'little weight'
            }
            ,{
                name: 'plastic wrap & rubberband'
            }
            ,{
                name: 'blender'
            }
            ,{
                name: 'jar /  bottle'
            }
        ]
    };

}); //closes routerApp.controller