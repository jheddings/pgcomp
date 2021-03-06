angular.module('pgcomp.services', ['ngResource'])

////////////////////////////////////////////////////////////////////////////////
.factory('Map', ['$resource',
    function ($resource) {
        return $resource('maps/:mapName.json', {}, {
            query: {method: 'GET', params: {mapName: 'maps'}, isArray: true}
        });
    }
]);
