angular.module('pgcomp.filters', [])

////////////////////////////////////////////////////////////////////////////////
// returns the first item from the array that matches all properties
// {{ input | find:{prop: val, ...} }}
// http://underscorejs.org/#findWhere
.filter('find', function() {
  return _.findWhere;
})

////////////////////////////////////////////////////////////////////////////////
// returns the desired index from the given array
// {{ input | select:key }}
.filter('select', function() {
  return function(array, key) {
    if (array == undefined) {
      return undefined;
    }

    if (array == null) {
      return undefined;
    }

    return array[key];
  };
});
