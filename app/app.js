'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);


myApp.factory('repoFactory', function repoFactory ($rootScope, $http) {
   var exports = {};

   exports.getRepos = function (userName) {
    return $http({method: 'GET', url: 'https://api.github.com/users/kibo007/repos'})
      .success(function(data, status, headers, config) {
        console.log(data)
      })
      .error(function(data, status, headers, config) {
        console.log('There was an error!', data);
      });
    };

   return exports;
});

myApp.controller('mainController', function ($scope, repoFactory) {
  $scope.title = "Angular Test App"

  $scope.formData = {};

  repoFactory.getRepos()
    .success(function(jsonData, statusCode) {
      console.log('The request was successful!', statusCode, jsonData);

      $scope.repos = jsonData;
  });
});
