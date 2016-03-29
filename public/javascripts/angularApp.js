angular.module('clusterApp', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){
    $scope.cluster = [{pid:1234}];
$scope.getMyPIDs = function() {
        $http.get('/pid').success(function(data){
          console.log("getAll");
          console.log(data);
          $scope.cluster.push(data);
        });
    }
$scope.getMyPIDs = function() {
for (i=0; i < 100; i++) {       
 $http.get('/pid').success(function(data){
          console.log("getAll");
          console.log(data);
          $scope.cluster.push(data);
        });
	}
    }
  } 
]);

