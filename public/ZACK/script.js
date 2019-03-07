
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
                ,{name: 'blankets'}
            ]
        }
        ,{
             title: 'fermentation'
            ,examples: [
                 {name: 'beer'}
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
                ,'ngnix'
            ]
        }
    ];
    $scope.helloWorld = [
        {
            title: 'starting sourdough'
            ,description: 'starter and loaf observations.'
            ,icon: 'fas fa-ghost'
            ,state: 'sourdough'
        }
    ];

}); //closes routerApp.controller