/*global angular:false, io:false, console:false */

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

    // wrapper around socket.io so that it can be shared between controllers
    .factory('socketIo', function () {
    
        var socket;
            
        return {        
            connect: function(connetion) {
                return (socket = io.connect('http://' + connetion.ip + ':' + connetion.port));
            },
            getSocket: function() {
                return socket;
            }
        };
    })

    .controller('connectController', function ($scope, $state, socketIo) {

        $scope.connection = {
            ip: "0.0.0.0",
            port: "1337"
        };
    
        $scope.connect = function() {  
            
            var socket = socketIo.connect($scope.connection);
            socket.on("connected", function (message) {
                $state.go('temperature');
            });
        };
    })


    .controller('temperatureController', function ($scope, socketIo) {

        var socket = socketIo.getSocket();
        socket.on("message", function (message) {
            
            $scope.$apply(function() {
                $scope.temperature = message + " °C"; 
            });

        });
    
    });