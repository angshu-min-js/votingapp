'use strict';

angular.module('workspaceApp')
  .directive('newPolls', function () {
    return {
      templateUrl: 'app/main/newPolls/newPolls.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });