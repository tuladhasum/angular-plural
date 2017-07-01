'use strict';

var editProfileController = function($scope,gravatarUrlBuilder){
  $scope.user = {};

  $scope.getGravatarUrl = function(email) {
    return gravatarUrlBuilder.buildGravatarUrl(email);
  };

};

eventsApp.controller('EditProfileController',editProfileController);
