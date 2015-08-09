'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newPolls', {
        templateUrl: 'app/main/newPolls/newPolls.html',
        controller: 'NewPollsCtrl'
      });
  });
