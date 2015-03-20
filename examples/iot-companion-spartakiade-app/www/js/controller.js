/*global angular:false, io:false, console:false */

angular.module('app')

    .controller('connectController', function ($scope, $state, socketIo) {

        $scope.connection = {
            ip: "127.0.0.1",
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