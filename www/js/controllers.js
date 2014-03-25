angular.module('pgcomp', [])

.controller('MapListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('maps/index.json').success(function(data) {
      $scope.maps = data;
    });
  }
]);
