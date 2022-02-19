
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
        .state('dumpling', {
            url: '/dumpling',
            templateUrl: '/ZACK/pages/dumpling.html',
            controller: ''
        });

}); //closes routerApp.config

routerApp.controller('appControl', function($scope, $http, $state){

    var req_appdetails = {
         method: 'GET'
        ,url: 'https://store.steampowered.com/api/appdetails?appids=785790&format=json'
    }

    $http(req_appdetails).then(function successCallback(response) {
        console.log('successCallback'+response);
    }, function errorCallback(response) {
        console.log('errorCallback'+response);
    });

    $scope.uiRouterState = $state;

    $scope.aboutActivities = [
        // {
        //      title: 'Alexandria, VA'
        // },
        {
            title: 'Crochet'
            ,examples: [
                 {name: 'Hats'}
                ,{name: 'Amigurumi'}
                ,{name: 'Potholders'}
            ]
        }
        ,{
             title: 'Fermentation'
            ,examples: [
                {  
                    name: 'Sourdough'
                    ,state: 'sourdough'
                }
                ,{
                    name: 'Hot sauce'
                    ,state: 'hotsauce'
                }
                ,{name: 'Beer'}
                ,{name: 'Sauerkraut'}
                ,{name: 'Kimchi'}
            ]
        }
        ,{
            title: 'Raspberry Pi'
            ,examples: [
                 {name: 'Arcade'}
                ,{name: 'Guitar pedal'}
                ,{name: 'Wireless display'}
            ]
        }
        ,{
             title: 'Stringed Instruments'
            ,examples: [
                 {name: 'Ukulele'}
                ,{name: 'Mandolin'}
                ,{name: 'Guitar'}
            ]
        }
    ];

    $scope.siteParts = [
        {
            title: 'Front'
            ,examples: [
                 'AngularJS'
                ,'Dart Sass'
                ,'Font Awesome'
                ,'Git'
                ,'Pure CSS'
            ]
        }
        ,{
            title: 'Back'
            ,examples: [
                 'Express'
                ,'NGINX'
                ,'Node.js'
            ]
        }
    ];

    $scope.helloWorld = [
        // {
        //     title: 'Starting Sourdough'
        //     ,description: 'Starter and bread observations'
        //     ,icon: 'fas fa-ghost'
        //     ,state: 'sourdough'
        //     ,mvp: true
        // }
        // ,{
        //     title: 'SVG'
        //     ,description: 'svg, css, js, etc.'
        //     ,icon: 'fas fa-code'
        //     ,state: 'svg'
        //     ,mvp: false
        // }
        // ,{
        //     title: 'Hot Sauce'
        //     ,description: 'working on it'
        //     ,icon: 'fas fa-pepper-hot'
        //     ,state: 'hotsauce'
        //     ,mvp: false
        // }
        // ,{
        //     title: 'Dumpling Matrix'
        //     ,description: 'working on it'
        //     ,icon: 'fas fa-utensils'
        //     ,state: 'dumpling'
        //     ,mvp: false
        // }
        {
            title: 'About'
            ,description: 'About Zack and this site'
            ,icon: 'fas fa-cog'
            ,state: 'about'
            ,mvp: true
        }
        ,{
            title: 'Connect'
            ,description: 'Connect with Zack'
            ,icon: 'fas fa-share-alt'
            ,state: 'connect'
            ,mvp: true
        }
    ];

    $scope.activeAnimation = false;
    $scope.toggleAnimation = function() {
        $scope.activeAnimation = !$scope.activeAnimation;
    };

    $scope.activeSVG = false;
    $scope.displaySVG = 'svg-moon';
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


    $scope.resume = {
        history: [
            {
                title: 'Director, Insights & Reporting'
                ,company: 'Tempest'
                ,start: '2022'
                ,end: 'Present'
                ,subpoints: [
                    // {point:'hello world'}
                ]
            }
            ,{
                title: 'UI/UX Designer'
                ,company: 'Knowland'
                ,start: '2011'
                ,end: '2021'
                ,subpoints: [
                    {point:'Builds designs (lo-fidelity to hi-fidelity) and end-to-end workflows for internal and client-facing experiences.'}
                    ,{point:'Rapidly iterates and adjusts features based on customer feedback, application usage metrics, and stakeholder input.'}
                    ,{point:'Enhances application experience by modernizing features based on web and mobile best practices.'}
                    ,{point:'Collaborates with software developers by engineering initial layout and design for new features and polishing final output.'}
                ]
            }
            ,{
                title: 'Business Analyst'
                ,company: 'Knowland'
                ,start: '2017'
                ,end: '2021'
                ,subpoints: [
                    {point:'Streamlines agile process by serving as a liaison between product and tech teams to determine innovative solutions that consider technical limitations and product needs.'}
                    ,{point:'Traces through application codebase to identify and update bugs and enhancement points.'}
                    ,{point:'Acquires extensive knowledge of business logic and processes to support engineering and product teams.'}
                    ,{point:'Generates reports and datasets for industry trends, client usage, feature adoption, and targeted data cleanup using SQL and Mixpanel.'}
                ]
            }
            ,{
                title: 'Product Manager'
                ,company: 'Knowland'
                ,start: '2013'
                ,end: '2017'
                ,subpoints: [
                    {point:'Supports internal and client-facing applications by working closely with helpdesk, client services, and sales.'}
                    ,{point:'Creates stories and bugs while maintaining backlog in accordance to stakeholder priorities and issue severity.'}
                    ,{point:'Writes comprehensive acceptance criteria and test case steps for QA.'}
                    ,{point:'Facilitates scrum initiatives including standups, grooming sessions, sprint planning, and retrospectives.'}
                    ,{point:'Managed six remote development team contractors by defining tasks, performing testing, and approving output before release | 2011 - 2015.'}
                ]
            }
            ,{
                title: 'Bachelor of Science, Industrial Design'
                ,start: '2010'
                ,company: 'Virginia Polytechnic Institute and State University'
            }
        ]
        ,skills : [
            {
                type: 'Experienced'
                ,skills: [
                    {name:'SQL'}
                    ,{name:'HTML5'}
                    ,{name:'CSS3'}
                    ,{name:'SCSS'}
                    
                ]
            }
            ,{
                type: 'Proficient'
                ,skills: [
                    {name:'Git'}
                    ,{name:'JavaScript'}
                    ,{name:'AngularJS'}
                    ,{name:'Adobe Suite'}
                ]
            }
        ]
    }


}); //closes routerApp.controller