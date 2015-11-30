'use strict';

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
