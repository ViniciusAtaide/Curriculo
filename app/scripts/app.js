'use strict';

angular.module('CurriculoApp', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider','$httpProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortCtrl'
      })
      .when('/complemento', {
        templateUrl: 'views/complemento.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });  
  }]);