'use strict';

window.angular.module('WissenkartenApp').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/categories');

    // default category
    $urlRouterProvider.when('/', '/categories');
    $urlRouterProvider.when('/categories', '/categories/general-knowledge');

    // default card
    $urlRouterProvider.when('/categories/general-knowledge', '/categories/general-knowledge/holiday');


    // Application routes
    $stateProvider
      .state('categories', {
        abstract: true,
        url: '/categories',
        templateUrl: '/views/landing.html'
      })

        // General Knowledge
        .state('categories.general-knowledge', {
          //abstract: true,
          url: '/general-knowledge',
          templateUrl: '/views/categories/general-knowledge/general-knowledge.html'
        })
          .state('categories.general-knowledge.holiday', {
            url: '/holiday',
            templateUrl: '/views/categories/general-knowledge/cards/holiday.html'
          })
          .state('categories.general-knowledge.president', {
            url: '/president',
            templateUrl: '/views/categories/general-knowledge/cards/president.html'
          })
          .state('categories.general-knowledge.question', {
            url: '/question',
            templateUrl: '/views/categories/general-knowledge/cards/question.html'
          })

        // Sports
        .state('categories.sports', {
          url: '/sports',
          templateUrl: 'views/categories/sports.html'
        })
        .state('categories.stocks', {
          url: '/stocks',
          templateUrl: 'views/categories/stocks.html'
        })
        .state('categories.weather', {
          url: '/weather',
          templateUrl: 'views/categories/weather.html'
        });
  }
]);