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

myApp.controller('mainController', function ($scope, repoFactory) {

  $scope.formData = {}

  $scope.getRepos = function() {
    var userName = $scope.formData.text

    repoFactory.getRepos(userName)
      .success(function(jsonData, statusCode) {
        $scope.formData = {};
        if (jsonData.length == 0) {
          console.log("EMPTY")
        } else {
          $scope.repos = jsonData;
        }
    });
  }
});
