/*global angular:false */

angular.module('app', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

        .state('temperature', {
          url: '/temperature',
          templateUrl: 'pageTemperature.html'
        })

        .state('connect', {
          url: '/connect',
          templateUrl: 'pageConnect.html'
        });

      $urlRouterProvider.otherwise('/temperature');
    });