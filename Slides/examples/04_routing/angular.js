var hardcodedData = [
    { id: 1, title: "Remember", message: "the milk" },
    { id: 2, title: "DWX", message: "one great weak!" },
    { id: 3, title: "MDC kompakt", message: "one great day!" }
];

angular.module('exampleApp', ['ngRoute'])

    .config(function($routeProvider) {

        $routeProvider.when('/list', {
            templateUrl: 'templates/list.html',
            controller: 'listController'
        });

        $routeProvider.when('/detail/:id', {
            templateUrl: 'templates/detail.html',
            controller: 'detailController'
        });

        $routeProvider.otherwise({ redirectTo: '/list' });
    })

    .controller('listController', function ($scope) {
        $scope.listOfNotes = hardcodedData;
    })

    .controller('detailController', function ($scope, $routeParams) {
        var detail = _.find(hardcodedData, function(d) { return d.id == $routeParams.id; });
        $scope.detail = detail;
    })

    .directive('stickyNote', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                title: '@',
                message: '@',
            },
            template:
                '<div class="sticky_note">' +
                '    <div>' +
                '        <h1>{{title}}</h1>' +
                '        <p>{{message}}</p>' +
                '    </div>' +
                '</div>'
        }
    });