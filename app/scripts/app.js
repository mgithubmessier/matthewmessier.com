var resumeApp = angular.module('ResumeApp', ['ngRoute']);
resumeApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
resumeApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/entry-detail/:heading', {
		templateUrl: 'app/templates/entry-detail.html',
		controller: 'entriesDetailsController'
	});
}])
