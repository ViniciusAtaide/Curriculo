'use strict';

angular.module('CurriculoApp')
  .controller('navCtrl', ['$scope', '$location', 'Nav', function ($scope, $location, Nav) {
    $scope.navClass = function (page) {

      var currentRoute = $location.path().substring(1) || '';

      return page === currentRoute ? 'active' : '';

    };
    $scope.select = function (i) {

      setTimeout(function() {

      });

      var $li = $('.nav > li');

      $scope.larg = $li.eq(i).width();

      $scope.left = $li.eq(i).offset().left;

    };
    $scope.selectActive = function() {
      var $active;

      setTimeout(function() {

        $active = $(".active");

        $scope.larg = $active.width();

        $scope.left = $active.offset().left;

      },1500);
    }
  }]);
