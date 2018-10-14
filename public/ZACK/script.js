
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
        });

});     //closes routerApp.config

routerApp.controller('appControl', function($scope, $window){

    // console.log('script.js');

});




