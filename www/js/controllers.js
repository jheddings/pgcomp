angular.module('pgcomp.controllers', [])

////////////////////////////////////////////////////////////////////////////////
.controller('MapListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('maps/index.json').success(function (data) {
            $scope.maps = data;
        });
    }
])

////////////////////////////////////////////////////////////////////////////////
.controller('MapDetailCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        var mapId = $routeParams.mapId;

        // TODO use service to load last number of players
        var numPlayers = 2;

        $http.get('maps/' + mapId + '.json').success(function (data) {
            $scope.map = data;
        });

        $scope.mapId = mapId;
        $scope.numPlayers = numPlayers;
    }
])

////////////////////////////////////////////////////////////////////////////////
.controller('MapEditCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        var mapId = $routeParams.mapId;

        $http.get('maps/' + mapId + '.json').success(function (data) {
            $scope.map = data;
        });
    }
]);
