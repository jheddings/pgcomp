
angular.module('pgcomp', ['ionic', 'pgcomp.services', 'pgcomp.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: 'TabCtrl'
    })

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

  $urlRouterProvider.otherwise('/tab/home');

});

