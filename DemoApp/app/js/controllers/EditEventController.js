'use strict';

var editEventController = function($scope){
  $scope.saveEvent = function(event, newEventForm){
    console.log(newEventForm);
    if (newEventForm.$valid) {
      console.log(event);
    }
  };

  $scope.cancelEdit = function(){
    window.location = "/EventDetails.html";
  };
};

eventsApp.controller('EditEventController',editEventController);
