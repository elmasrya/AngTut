(function () {

  angular.module('BookApp').controller('SecondCtrl',
  ['$scope', 'Data', function($scope, Data){


          $scope.data = Data;

          $scope.reversedMessage = function () {
            return $scope.data.message.split("").reverse().join("");
          };


  }]);

}());
