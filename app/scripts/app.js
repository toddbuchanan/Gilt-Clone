'use strict';

/**
 * @ngdoc overview
 * @name giltCloneApp
 * @description
 * # giltCloneApp
 *
 * Main module of the application.
 */
var app =
  angular.module('giltCloneApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('API', {
    'key': '89f36aa51e4ec024a6893efdc600fbea36e3a44e84bf237f9a613aca97fd473c'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:id', {
        templateUrl: 'views/sales.html',
        controller: 'SalesCtrl',
        controllerAs: 'sales'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
