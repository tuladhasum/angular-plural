'use strict';

var eventController = function($scope,eventData,$log){
  $scope.snippet = '<span style="color:red;">Flag</span>';
  $scope.boolValue = true;
  $scope.mystyle = {color:'red'};
  $scope.myclass = 'text-muted';
  $scope.limitVal = 10;
  $scope.buttonDisabled = true;
  $scope.sortorder ='-upVoteCount';
  // eventData.getEvent(function(event){
  //   $scope.event = event;
  // });

  // Using resource
  // $scope.event =eventData.getEvent();

  // Using resource Promise
  eventData.getEvent()
    .$promise
    .then( function(event){$scope.event = event; console.log(event)})
    .catch(function(response){console.log(response)} );

  // Using Promise
  // eventData.getEvent()
  //   .success(function(event){$scope.event=event;})
  //   .error(function(data,status,headers,config){
  //     $log.warn(data,status,headers(),config);
  //   });
  $scope.upVoteSession = function(session){
    session.upVoteCount++;
  };

  $scope.downVoteSession = function(session){
    session.upVoteCount--;
  };
};

eventsApp.controller('EventController',eventController);
