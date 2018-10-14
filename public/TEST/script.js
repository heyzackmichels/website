
var routerApp = angular.module('routerApp', ['ui.router', 'ct.ui.router.extras', 'ui.bootstrap', 'ngAnimate']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/testA');

    $stateProvider

        .state('testA', {
            url: '/testA',
            templateUrl: '/TEST/pages/testA.html',
            controller: ''
        })
        .state('testB', {
            url: '/testB',
            templateUrl: '/TEST/pages/testB.html',
            controller: ''
        });

});     //closes routerApp.config

routerApp.controller('appControl', function($scope, $window){

    console.log('NSF_app script.js');

});




