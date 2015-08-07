'use strict';

describe('Controller: PolesCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var PolesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolesCtrl = $controller('PolesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
