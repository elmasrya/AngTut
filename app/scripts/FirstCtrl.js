(function () {

  angular.module('BookApp').controller('FirstCtrl',
  ['$scope', 'Data', function($scope, Data){


          $scope.data = Data;


  }]);

}());
