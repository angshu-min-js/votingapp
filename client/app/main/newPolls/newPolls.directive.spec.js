'use strict';

describe('Directive: newPolls', function () {

  // load the directive's module and view
  beforeEach(module('workspaceApp'));
  beforeEach(module('app/main/newPolls/newPolls.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-polls></new-polls>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the newPolls directive');
  }));
});