angular.module('exampleApp', [])

    .directive('stickyNote', function () {
        return {
            // directive only matches elements now
            restrict: 'E',  
            replace: true,
            // creates a new isolated scope 
            // '=' means bi-directional / '@' means the variable will be copied (cloned)
            scope: { 
                title: '@',
                message: '@',
            },
            templateUrl: 'angular.tmpl.html'
            /*
            template:
                '<div class="sticky_note">' +
                '    <div>' +
                '        <h1>{{title}}</h1>' +
                '        <p>{{message}}</p>' +
                '    </div>' +
                '</div>' */
        }
    })

    .controller('exampleController', function ($scope) {

        $scope.model = {
            title: "Remember",
            message: "the milk"
        }
        
    });