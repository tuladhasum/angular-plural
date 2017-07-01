'use strict';

var eventData = function($http,$log,$resource) {
  return {
    getEvent: function(){
      return $resource('/data/event/:id',{id:'@id'}).get({id:1});
    },


    getEventPromise: function(){
      return $http({method:'GET',url:'/data/event/1'});
    },
    getEventOld: function(successcb){
      $http({method: 'GET', url: '/data/event/1'}).
        success(function(data,status,headers,config){
          successcb(data);
        })
        .error(function(data,status,headers,config){
          $log.warn(data, status, headers(), config);
        });
    }
  };
};

eventsApp.factory('eventData', eventData);
