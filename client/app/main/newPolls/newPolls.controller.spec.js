'use strict';

describe('Controller: NewPollsCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var NewPollsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewPollsCtrl = $controller('NewPollsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
