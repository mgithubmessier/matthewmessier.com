angular.module('ResumeApp').controller('entriesDetailsController', [
    '$scope',
    '$http',
    '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('app/scripts/entry-details.json').then(function(data) {
            $scope.heading = $routeParams.heading;
            $scope.entries = data.data[$routeParams.heading];
            console.log(JSON.stringify(data.data[$routeParams.heading]));
        });    
    }
]);
angular.module('ResumeApp').controller('navbarController', [
    '$scope',
    '$http',
    '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('app/scripts/headings.json').then(function(data) {
            $scope.headings = data.data;
        });
    }
]);