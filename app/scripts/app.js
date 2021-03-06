console.log('hello')

/// App Config ///

var Chat = angular.module('chatApp', ['firebase'])



/// Call the controller ///

.controller('chatCtrl', function($scope, $firebaseObject) {

  var ref = new Firebase("https://gabe-bloc-chat.firebaseio.com/");  

  // sync as object 
  var syncObject = $firebaseObject(ref.child('rooms'));

  // three way data binding
  syncObject.$bindTo($scope, 'rooms');

  // function to set the default data
  $scope.set = function() {    

  var daysRef = ref.child('rooms');

    daysRef.set({
      '1': {
        name: 'Room 1',
      },
      '2': {
        name: 'Room 2',
      },
      '3': {
        name: 'Room 3',
      },
      '4': {
        name: 'Room 4',
      }

    });

  };

});
