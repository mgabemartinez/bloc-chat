console.log('hello')

/// App Config ///

var Chat = angular.module('Chat', ['firebase', 'ui.router']);

Chat.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider.state('home', {
     url: '/',
     controller: 'home.controller',
     templateUrl: '/templates/home.html'
  });


}]);






/// Call the controller ///

Chat.controller('about.controller', ['$scope', function($scope) {

 }]);
