
angular.module('ResumeApp').controller('entriesController', [
    '$scope',
    '$http',
    '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('app/scripts/' + $routeParams.heading + '.json').then(function(data) {
            $scope.entries = data.data;
        });
    }
]);
angular.module('ResumeApp').controller('navbarController', [
    '$scope',
    '$http',
    '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('app/scripts/headings.json').then(function(data) {
            for(dat in data)
            console.log("DATA: " + dat);
            $scope.headings = data.data;
        });
    }
]);