

angular.module('WissenkartenApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    // Should be handled with server
    //$locationProvider.html5Mode(true);

    // For unmatched routes
    $urlRouterProvider.otherwise('/landing');

    $urlRouterProvider.when('/', '/landing');

    // Application routes
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: '/views/landing.html'
      });
  }
]);