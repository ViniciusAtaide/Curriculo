'use strict';

angular.module('CurriculoApp')
  .controller('PortCtrl', ['$scope', function ($scope) {
    $scope.sites = [
      {
        titulo: 'Sue Cabral',
        src: 'images/sue.jpg',
        footer: 'Desenvolvimento Parcial: Construção da estrutura HTML/CSS de 3 telas do site (VIP/Marcas/Sobre).',
        url: 'http://www.suecabral.com.br'
      },
      {
        titulo: 'Plastex',
        src: 'images/plastex.jpg',
        footer: 'Desenvolvimento Completo (Site em testes): Toda estrutura HTML/CSS + Javascript com Jquery.',
        url: 'http://plastex.sodateste.com.br'
      }];
  }]);
