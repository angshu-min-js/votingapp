'use strict';

angular.module('workspaceApp')
  .directive('myPolls', function () {
    return {
      templateUrl: 'app/main/myPolls/myPolls.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });