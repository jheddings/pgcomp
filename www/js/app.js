angular.module('pgcomp', [
  'ngRoute',
  'pgcomp.controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

    //---------------------------------------------------
    when('/setup', {
      templateUrl: 'partials/setup.html',
      controller: 'MapListCtrl'
    }).

    //---------------------------------------------------
    when('/quickref/:mapId-:numPlayers', {
      templateUrl: 'partials/quickref.html',
      controller: 'QuickRefCtrl'
    }).

    //---------------------------------------------------
    when('/play/:mapId-:numPlayers-:step', {
      templateUrl: 'partials/walkthrough.html',
      controller: 'WalkthroughCtrl'
    }).

    //---------------------------------------------------
    otherwise({
      redirectTo: '/setup'
    });

}]);
