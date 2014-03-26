angular.module('pgcomp.controllers', [])

////////////////////////////////////////////////////////////////////////////////
.controller('MapListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('maps/index.json').success(function(data) {
      $scope.maps = data;
    });

    $scope.mapId = null;
    $scope.numPlayers = 2;
  }
])

////////////////////////////////////////////////////////////////////////////////
.controller('QuickRefCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    var mapId = $routeParams.mapId;
    var numPlayers = $routeParams.numPlayers;

    $http.get('maps/' + mapId + '.json').success(function(data) {
      $scope.map = data;
    });

    $scope.mapId = mapId;
    $scope.numPlayers = numPlayers;
  }
])

////////////////////////////////////////////////////////////////////////////////
.controller('WalkthroughCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    var mapId = $routeParams.mapId;
    var numPlayers = $routeParams.numPlayers;
    var step = $routeParams.step;

    $http.get('maps/' + mapId + '.json').success(function(data) {
      $scope.map = data;
    });

    $scope.mapId = mapId;
    $scope.numPlayers = numPlayers;
    $scope.step = numPlayers;
  }
]);
