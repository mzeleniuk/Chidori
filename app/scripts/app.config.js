'use strict';

angular.module('chidoriApp').config(function($urlRouterProvider, $stateProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    
    .state('main', {
        url: '/',
        templateUrl: '/views/main.html'
    })
    
    .state('register', {
        url: '/register',
        templateUrl: '/views/register.html'
    });
});
