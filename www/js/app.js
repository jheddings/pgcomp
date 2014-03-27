angular.module('pgcomp', [
  'ngRoute',
  'ui.bootstrap',
  'pgcomp.controllers',
  'pgcomp.filters'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

    //---------------------------------------------------
    when('/select', {
      templateUrl: 'partials/select.html',
      controller: 'MapListCtrl'
    }).

    //---------------------------------------------------
    when('/quickref/:mapId', {
      templateUrl: 'partials/quickref.html',
      controller: 'MapDetailCtrl'
    }).

    //---------------------------------------------------
    when('/guide/:mapId-:numPlayers-prep', {
      templateUrl: 'partials/guide-prep.html',
      controller: 'MapDetailCtrl'
    }).

    //---------------------------------------------------
    when('/guide/:mapId-:numPlayers-step1', {
      templateUrl: 'partials/guide-step-1.html',
      controller: 'MapDetailCtrl'
    }).

    //---------------------------------------------------
    when('/guide/:mapId-:numPlayers-step2', {
      templateUrl: 'partials/guide-step-2.html',
      controller: 'MapDetailCtrl'
    }).

    //---------------------------------------------------
    when('/guide/:mapId-:numPlayers-step3', {
      templateUrl: 'partials/guide-step-3.html',
      controller: 'MapDetailCtrl'
    }).

    //---------------------------------------------------
    otherwise({
      redirectTo: '/select'
    });

}]);
