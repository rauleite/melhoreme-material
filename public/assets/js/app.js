angular.module('mainApp', [
    //LIBs
    'ngRoute',
    'ngMaterial',
    'ngAnimate',
    //'infinite-scroll',

    //APP MODULES
    'appRoutes',
    'appDirectives',

    //CONTROLLERS E SERVICES
    'MainCtrl',
    'NerdCtrl',
    'SideLeftCtrl',
    'NerdService',
    'GeekCtrl',
    'GeekService',
]);