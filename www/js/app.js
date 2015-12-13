'use strict';

//NOTE: YouTube walkthrough: https://www.youtube.com/watch?v=N3gd7wyTFl4

var app = angular.module('myspotify', ['ionic', 'myspotify.controllers', 'ngCordova', 'spotify']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('list', {
            url: '/',
            templateUrl: 'templates/lists.html',
            controller: 'ListsCtrl'
        })
        .state('playlist', {
            url: '/playlist/:listid/:userid/:listname',
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
        });
});

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
