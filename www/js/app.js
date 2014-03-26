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
      controller: 'MapDetailCtrl'
    }).

    //---------------------------------------------------
    when('/guide/:mapId-:numPlayers-0', {
      templateUrl: 'partials/guide-0.html',
      controller: 'MapDetailCtrl'
    }).

    //---------------------------------------------------
    otherwise({
      redirectTo: '/maps'
    });

}]);
