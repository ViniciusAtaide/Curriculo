'use strict';

angular.module('CurriculoApp')
  .controller('navCtrl', ['$scope','$location', function ($scope, $location) {
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || '';
      return page === currentRoute ? 'active' : '';
    };
  }]);
