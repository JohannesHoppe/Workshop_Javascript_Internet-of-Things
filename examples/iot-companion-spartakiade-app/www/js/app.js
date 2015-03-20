/*global angular:false, console:false */

angular.module('app', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

        .state('temperature', {
          url: '/temperature',
          templateUrl: 'pageTemperature.html'
        })

        .state('connect', {
          url: '/connect',
          templateUrl: 'pageConnect.html',
          controller: 'connectController'
        });

      $urlRouterProvider.otherwise('/connect');
    })

    .controller('connectController', function ($scope, $state) {

        console.log($scope);

        $scope.model = {
            ip: "0.0.0.0",
            port: "1337"
        };
    
        $scope.connect = function() {
            
            $state.go('temperature');
        };
    
        
    });