'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/poles', {
        templateUrl: 'app/poles/poles.html',
        controller: 'PolesCtrl'
      });
  });
