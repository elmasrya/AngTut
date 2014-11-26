(function () {

  angular.module('BookApp', []);

}());

(function () {

  angular.module('BookApp')
    .factory('Data', function () {
        return{message: "I'm data from a service"};
      });

}());

/**/

(function () {

  angular.module('BookApp').controller('SecondCtrl',
  ['$scope', 'Data', function($scope, Data){


          $scope.data = Data;

          $scope.reversedMessage = function () {
            return $scope.data.message.split("").reverse().join("");
          };


  }]);

}());

(function () {

  angular.module('BookApp').controller('FirstCtrl',
  ['$scope', 'Data', function($scope, Data){


          $scope.data = Data;


  }]);

}());
