/*global angular:false, io:false, console:false */

angular.module('app', ['ionic', 'chart.js'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('temperature', {
            url: '/temperature',
            templateUrl: 'pageTemperature.html',
            controller: 'temperatureController'
        })

        .state('connect', {
            url: '/connect',
            templateUrl: 'pageConnect.html',
            controller: 'connectController'
        });

        $urlRouterProvider.otherwise('/connect');
    
        Chart.defaults.global.colours = ['#c0392b'];
    })

    // simple wrapper around socket.io so that it can be shared between controllers
    .factory('socketIo', function () {
    
        var socket;
    
        return {        
            connect: function(connetion) {
                if(socket) {
                    socket.disconnect();
                }
                return (socket = io.connect('http://' + connetion.ip + ':' + connetion.port, {'forceNew':true }));
            },
            getSocket: function() {
                return socket;
            }
        };
    });