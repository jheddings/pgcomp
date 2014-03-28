angular.module('pgcomp.filters', [])

////////////////////////////////////////////////////////////////////////////////
// returns the first item from the array that matches all properties
// {{ input | find:{prop: val, ...} }}
.filter('find', function () {
    return _.findWhere;
})

////////////////////////////////////////////////////////////////////////////////
// returns the desired index from the given array
// {{ input | item:key }}
.filter('item', function () {
    return function (array, key) {
        if ((array == undefined) || (array == null)) {
            return undefined;
        }

        return array[key];
    };
});
