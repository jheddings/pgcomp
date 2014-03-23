angular.module('starter.controllers', ['ionic'])


    // A simple controller that fetches a list of data from a service
    .controller('HomeCtrl', function($scope) {
    })

    .controller('TabCtrl', function($scope, $ionicSideMenuDelegate) {
        $scope.leftButtons = [
            {
                type: 'button-positive',
                content: '<i class="icon ion-navicon"></i>',
                tap: function(e) {
                    $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
                }
            }
        ];
    })

    .controller('TurnCtrl', function($scope) {
    })

    .controller('PaymentCtrl', function($scope) {
    })

    .controller('CalculatorCtrl', function($scope) {
    });
