angular.module('ResumeApp').controller('entriesDetailsController', [
    '$scope',
    '$http',
    '$location',
    function($scope, $http, $location) {
        $http.get('app/scripts/entry-details.json').then(function(data) {
            var heading = $location.url().substr(1); 
            $scope.entries = data.data[heading];
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