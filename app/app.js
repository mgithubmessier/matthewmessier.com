var resumeApp = angular.module('ResumeApp', ['ngRoute']);
resumeApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/headings/:heading', {
		templateUrl: 'templates/headings.html',
		controller: 'navbarController'
	});
}])
