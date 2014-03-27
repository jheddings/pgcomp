angular.module('pgcomp.controllers', [])

////////////////////////////////////////////////////////////////////////////////
.controller('MapListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('maps/index.json').success(function(data) {
      $scope.maps = data;
    });

    // TODO create service to save last selected values
    $scope.mapId = null;
    $scope.numPlayers = 2;
  }
])

////////////////////////////////////////////////////////////////////////////////
.controller('MapDetailCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    var mapId = $routeParams.mapId;
    var numPlayers = parseInt($routeParams.numPlayers);

    $http.get('maps/' + mapId + '.json').success(function(data) {
      $scope.map = data;
    });

    $scope.mapId = mapId;
    $scope.numPlayers = numPlayers;
  }
]);
