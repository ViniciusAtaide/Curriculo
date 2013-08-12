'use strict';

angular.module('CurriculoApp')
  .controller('PortCtrl', function ($scope) {
    $scope.sites = [
      {
        titulo: "Sue Cabral",
        src: "images/sue.jpg",
        footer: "Desenvolvimento Parcial",
        url: "www.suecabral.com.br"
      },
      { titulo: "Plastex", src: "images/plastex.jpg" }
    ];
  });
