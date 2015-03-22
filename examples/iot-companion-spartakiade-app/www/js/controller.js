/*global angular:false, io:false, console:false */

angular.module('app')

    .controller('connectController', function ($scope, $state, socketIo) {

        $scope.connection = {
            ip: '127.0.0.1',
            port: '1337'
        };
    
        $scope.connect = function() {  
            
            var socket = socketIo.connect($scope.connection);
            socket.on('connected', function (message) {
                $state.go('temperature');
            });
        };
    })


    .controller('temperatureController', function ($scope, $state, socketIo, dateFilter) {

        $scope.labels = [];
        $scope.temperatures = [];
 
        var socket = socketIo.getSocket();
        if (!socket) {
            $state.go('connect');
        } else {
    
            socket.on('message', function (temperature) {

                $scope.$apply(function() {

                    $scope.temperature = temperature.toFixed(2) + ' °C';
                    $scope.labels.push(dateFilter(new Date(), 'HH:mm'));
                    $scope.temperatures.push(temperature);

                    if ($scope.temperatures.length > 15) {
                       $scope.temperatures.shift(); 
                       $scope.labels.shift();
                    }
                });

            });
        };
    });