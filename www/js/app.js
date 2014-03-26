angular.module('pgcomp', [
  'ngRoute',
  'pgcomp.controllers',
  'pgcomp.filters'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

    //---------------------------------------------------
    when('/maps', {
      templateUrl: 'partials/maps.html',
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
      redirectTo: '/maps'
    });

}]);
