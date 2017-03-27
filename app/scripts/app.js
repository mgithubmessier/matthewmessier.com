var resumeApp = angular.module('ResumeApp', ['ngRoute']);
resumeApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
resumeApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/Cinematography', {
		templateUrl: 'app/templates/cinematography.html',
		controller: 'entriesDetailsController'
	}).
	when('/Education', {
		templateUrl: 'app/templates/education.html',
		controller: 'entriesDetailsController'
	}).
	when('/Experience', {
		templateUrl: 'app/templates/experience.html',
		controller: 'entriesDetailsController'
	}).
	when('/Leadership', {
		templateUrl: 'app/templates/leadership.html',
		controller: 'entriesDetailsController'
	}).		
	when('/Technology', {
		templateUrl: 'app/templates/technology.html',
		controller: 'entriesDetailsController'
	}).
	when('/About', {
		templateUrl: 'app/templates/about.html',
		controller: 'entriesDetailsController'
	});
}])
