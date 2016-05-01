"use strict";
var main_app = angular.module('main_app', ['ngSanitize','ui.router', 'ui.bootstrap', 'ngCookies']);

main_app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'public/partials/content.html',
                controller: 'homeController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'public/partials/login.html',
                controller: 'loginController'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'public/partials/admin.html'
            });

    $urlRouterProvider.otherwise('/home');
});
