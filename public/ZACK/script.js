
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
        .state('travis', {
            url: '/travis',
            templateUrl: '/ZACK/pages/travis.html',
            controller: ''
        });

});     //closes routerApp.config

routerApp.controller('appControl', function($scope, $window){

    // console.log('script.js');

    $scope.aboutActivities = [
        // {
        //      title: 'Alexandria, VA'
        // },
        {
            title: 'crochet'
            ,examples: [
                'hats'
                ,'blankets'
                ,'amigurumi'
            ]
        }
        ,{
             title: 'fermentation'
            ,examples: [
                 'beer'
                ,'sourdough'
                ,'sourkraut'
                ,'kimchi'
            ]
        }
        ,{
            title: 'raspberry pi builds'
            ,examples: [
                    'arcade'
                ,'guitar pedal'
                ,'wireless display'
            ]
        }
        ,{
             title: 'stringed instruments'
            ,examples: [
                 'ukulele'
                ,'mandolin'
                ,'guitar'
            ]
        }
    ];

});




