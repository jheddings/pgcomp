// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: 'TabCtrl'
    })

    // the pet tab has its own child nav-view and history
    .state('tab.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('tab.turn', {
      url: '/turn',
      views: {
        'turn-tab': {
          templateUrl: 'templates/turn.html',
          controller: 'TurnCtrl'
        }
      }
    })

    .state('tab.payment', {
      url: '/payment',
      views: {
        'payment-tab': {
          templateUrl: 'templates/payment.html',
          controller: 'PaymentCtrl'
        }
      }
    })

    .state('tab.calculator', {
      url: '/calculator',
      views: {
        'calculator-tab': {
          templateUrl: 'templates/calculator.html',
          controller: 'CalculatorCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

