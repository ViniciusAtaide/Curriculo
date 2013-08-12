'use strict';

angular.module('CurriculoApp')
  .controller('MainCtrl', [ '$scope', function ($scope) {
     $scope.horizontal = function (event, delta, deltaX, deltaY) {
      console.log(event, delta, deltaX, deltaY);
    };
  }]);
