/*
 * Author: abu.muslim.amr@gmail.com
 * Summary: configure application routes, using ui-router
 * */

(function() {
  'use strict';

  window.ngApp.config(function($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/landing/signup');

    // default category
    $urlRouterProvider.when('/', '/landing');
    $urlRouterProvider.when('/landing', '/landing/signup');

    // Application routes
    $stateProvider
      // Landing
      .state('landing', {
        abstract: true,
        url: '/landing',
        template: '<ui-view></ui-view>'
      })
        // Landing.Signup
        .state('landing.signup', {
          url: '/signup',
          templateUrl: '/views/landing/signup.html'
        })
      // Dashboard
      .state('dashboard', {
        abstract: true,
        url: '/dashboard',
        templateUrl: '/views/dashboard.html'
      })
        // Dashboard.Add-Company
        .state('dashboard.add-company', {
          url: '/add-company',
          templateUrl: '/views/dashboard/add-company.html'
        });
  });
})();