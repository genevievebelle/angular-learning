'use strict';

describe('myApp.mainController controller', function(){

  beforeEach(module('myApp'));

  var mainController, scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mainController = $controller('mainController', {
      $scope: scope
    });

  }));

  it('should getRepos', inject(function($controller) {
    var mainController = $controller('mainController');
    expect(mainController).toBeDefined();
  }));

});
