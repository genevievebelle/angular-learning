'use strict';

myApp.factory('repoFactory', function repoFactory ($rootScope, $http) {
  var exports = {};

  exports.getRepos = function (userName) {

    return $http({method: 'GET', url: 'https://api.github.com/users/'+userName+'/repos'})
      .success(function(data, status) {
        console.log('The request was successful!', data);
      })
      .error(function(data, status) {
        console.log('There was an error!', data);
      });
    };

   return exports;
});
