var myApp = angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/state1");
        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "partials/state1.html"
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "partials/state2.html",
                controller: function ($scope) {
                    $scope.message = "... and a text from the controller!";
                }
            });
    });